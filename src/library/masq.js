import signalhub from 'signalhubws'
import swarm from 'webrtc-swarm'
import pump from 'pump'
import uuidv4 from 'uuid/v4'
import common from 'masq-common'

const { encrypt, decrypt, importKey, derivePassphrase } = common.crypto
const { dbReady, createPromisifiedHyperDB } = common.utils

const HUB_URLS = process.env.REACT_APP_SIGNALHUB_URLS.split(',')

const swarmOpts = process.env.NODE_ENV === 'test'
  ? { wrtc: require('wrtc') }
  : {}

/**
 * Open or create a hyperdb instance
 * @param {string} name The indexeddb store name
 */
const openOrCreateDB = (name) => {
  return createPromisifiedHyperDB(name)
}

class Masq {
  constructor () {
    this.profileId = null
    this.profileDB = null

    this.appsDBs = {}
    this.swarms = {}
    this.hubs = {}

    this.sw = null // sw used during login and registration
    this.hub = null
    this.key = null
    this.peer = null
    this.app = null
  }

  /**
   * Open and replicate a profile database
   */
  async openProfile (profileId) {
    if (!profileId) throw Error('Missing profileId')

    this.closeProfile()

    this.profileId = profileId

    this.profileDB = openOrCreateDB(profileId)
    this.profileDB.on('ready', () => this._startReplicate(this.profileDB))

    const apps = await this.getApps()
    apps.forEach(app => {
      const dbName = profileId + '-' + app.id
      const db = openOrCreateDB(dbName)
      this.appsDBs[dbName] = db
      db.on('ready', () => this._startReplicate(db))
    })

    const profile = (await this.profileDB.getAsync('/')).value
    return profile
  }

  async closeProfile () {
    this._stopAllReplicates()
    this.profileDB = null
    this.profileId = null
    this.appsDBs = {}
  }

  /**
   * Create a new profile DB
   * @param {object} profile The new profile to add
   */
  async addProfile (profile) {
    // TODO: Check profile properties
    const id = uuidv4()
    const hashedPassphrase = await derivePassphrase(profile.password)
    const publicProfile = {
      username: profile.username,
      image: profile.image,
      id: id
    }
    const privateProfile = {
      ...publicProfile,
      firstname: profile.firstname,
      lastname: profile.lastname,
      hashedPassphrase: hashedPassphrase
    }

    // Create a DB for this profile
    const db = openOrCreateDB(id)
    await dbReady(db)
    await db.putAsync('/', privateProfile)
    this._setProfileToLocalStorage(publicProfile)
  }

  /**
   * Get public profiles from localstorage (id, username, and )
   */
  async getProfiles () {
    return this._getProfilesFromLocalStorage()
  }

  /**
   * Get private profile from hyperdb
   */
  async getProfile (profileId) {
    this._checkProfile()
    const profile = (await this.profileDB.getAsync('/')).value
    return profile
  }

  /**
   * Update an existing profile
   * @param {object} profile The updated profile
   */
  async updateProfile (profile) {
    // TODO: Check profile
    this._checkProfile()
    const id = profile.id
    if (!id) throw Error('Missing id')

    const privateProfile = await this.getProfile(id)
    // First update private profile
    const updatedPrivateProfile = { ...privateProfile, ...profile }
    // Extract public profile from up-to-date profile
    const updatePublicProfile = {
      username: updatedPrivateProfile.username,
      image: updatedPrivateProfile.image,
      id: id
    }

    await this.profileDB.putAsync('/', updatedPrivateProfile)
    this._setProfileToLocalStorage(updatePublicProfile)
  }

  /**
   * Add an app to a specified profile
   * @param {object} app The app
   */
  addApp (app) {
    return this._createResource('apps', app)
  }

  /**
   * Add a device to a specified profile
   * @param {object} device The device
   */
  addDevice (device) {
    return this._createResource('devices', device)
  }

  /**
   * Get all apps of the current profile
   */
  getApps () {
    this._checkProfile()
    return this._getResources('apps')
  }

  /**
   * Get all devices of the current profile
   */
  getDevices () {
    this._checkProfile()
    return this._getResources('devices')
  }

  /**
   * Update an app
   * @param {object} app The updated app
   */
  updateApp (app) {
    this._checkProfile()
    return this._updateResource('apps', app)
  }

  /**
   * Update a device
   * @param {object} device The updated device
   */
  async updateDevice (device) {
    this._updateResource('devices', device)
  }

  /**
   * Connect to a user-app channel and answer if
   * the user-app is authorized or not.
   * This method should be called only once the user is logged in
   * @param {string} channel The channel to connect
   * @param {string} rawKey The encryption key, base64 encoded
   * @param {string} appId The app id (url for instance)
   */
  async handleUserAppLogin (channel, rawKey, appId) {
    return new Promise(async (resolve, reject) => {
      this.appId = appId
      this._checkProfile()
      this.key = await importKey(Buffer.from(rawKey, 'base64'))

      const sendAuthorized = async (peer, userAppDbId) => {
        const data = { msg: 'authorized', userAppDbId }
        const encryptedMsg = await encrypt(this.key, data, 'base64')
        peer.send(JSON.stringify(encryptedMsg))
      }

      const sendNotAuthorized = async (peer) => {
        const data = { msg: 'notAuthorized' }
        const encryptedMsg = await encrypt(this.key, data, 'base64')
        peer.send(JSON.stringify(encryptedMsg))
      }

      this.hub = signalhub(channel, HUB_URLS)
      this.sw = swarm(this.hub, swarmOpts)

      this.sw.on('disconnect', () => {
        this._closeUserAppConnection()
        return resolve(true)
      })

      this.sw.on('peer', async (peer) => {
        this.peer = peer
        const apps = await this.getApps()
        const app = apps.find(app => app.appId === appId)

        if (app) {
          sendAuthorized(peer, app.id)
        } else {
          sendNotAuthorized(peer)
        }

        peer.once('data', async (data) => {
          const json = await decrypt(this.key, JSON.parse(data), 'base64')

          if (json.msg === 'connectionEstablished') {
            this._closeUserAppConnection()
            return resolve(true)
          } else if (json.msg === 'registerUserApp') {
            const { name, description, imageURL } = json
            this.app = { name, description, imageURL }
            resolve(false)
          } else {
            reject(new Error('Invalid data'))
          }
        })
      })
    })
  }

  /**
   * Exchange messages with a user-app to register it.
   * It will create a new hyperdb with a given id.
   * Then, the user-app send its local key to authorize.
   * This method should be called only once the user is logged in
   * @param {string} channel The channel to connect
   * @param {string} rawKey The encryption key, base64 encoded
   * @param {string} appId The app id (url for instance)
   */
  async handleUserAppRegister (isGranted) {
    return new Promise(async (resolve, reject) => {
      this._checkProfile()

      let dbName = ''

      const sendAccessRefused = async (peer) => {
        const data = { msg: 'masqAccessRefused' }
        const encryptedMsg = await encrypt(this.key, data, 'base64')
        peer.send(JSON.stringify(encryptedMsg))
      }

      const sendAccessGranted = async (peer, dbKey, userAppDbId) => {
        const data = { msg: 'masqAccessGranted', key: dbKey, userAppDbId }
        const encryptedMsg = await encrypt(this.key, data, 'base64')
        peer.send(JSON.stringify(encryptedMsg))
      }

      const sendWriteAccessGranted = async (peer) => {
        const data = { msg: 'writeAccessGranted' }
        const encryptedMsg = await encrypt(this.key, data, 'base64')
        peer.send(JSON.stringify(encryptedMsg))
      }

      const handleData = async (peer, data) => {
        const json = await decrypt(this.key, JSON.parse(data), 'base64')
        const { msg } = json
        // TODO: Error if  missing params

        if (msg === 'requestWriteAccess') {
          const userAppKey = Buffer.from(json.key, 'hex')
          this.appsDBs[dbName].authorize(userAppKey, (err) => {
            if (err) throw err
            sendWriteAccessGranted(peer)
            this.sw.close()
            return resolve()
          })
        }
      }

      if (!isGranted) {
        sendAccessRefused(this.peer)
        this.sw.close()
        return resolve()
      }

      const apps = await this.getApps()
      const app = apps.find(app => app.appId === this.appId)
      const id = app ? app.id : await this.addApp({
        ...this.app, appId: this.appId
      })

      dbName = this.profileId + '-' + id
      const db = openOrCreateDB(dbName)
      this.appsDBs[dbName] = db
      db.on('ready', () => {
        this._startReplicate(db)
        sendAccessGranted(this.peer, db.key.toString('hex'), id)
      })

      this.peer.on('data', (data) => handleData(this.peer, data))
    })
  }

  /**
   * Private methods
   */

  async _createResource (name, res) {
    this._checkProfile()
    const node = await this.profileDB.getAsync(`/${name}`)
    const ids = node ? node.value : []
    const id = uuidv4()
    res['id'] = id

    const batch = [{
      type: 'put',
      key: `/${name}`,
      value: [...ids, id]
    }, {
      type: 'put',
      key: `/${name}/${id}`,
      value: res
    }]

    await this.profileDB.batchAsync(batch)
    return id
  }

  async _getResources (name) {
    const node = await this.profileDB.getAsync(`/${name}`)
    if (!node) return []

    const ids = node.value
    const resourcePromises = ids.map(
      id => this.profileDB.getAsync(`/${name}/${id}`)
    )
    const resourceNodes = await Promise.all(resourcePromises)
    const resources = resourceNodes.map(n => n.value)
    return resources
  }

  async _updateResource (name, res) {
    const id = res.id
    if (!id) throw Error('Missing id')
    return this.profileDB.putAsync(`/${name}/${id}`, res)
  }

  _setProfileToLocalStorage (profile) {
    const id = profile.id
    if (!id) throw Error('missing id')

    window.localStorage.setItem(id, JSON.stringify({
      id: id,
      username: profile.username,
      image: profile.image
    }))
  }

  _getProfilesFromLocalStorage () {
    const ids = Object.keys(window.localStorage)
    if (!ids) return []

    const profiles = ids.map(id =>
      JSON.parse(window.localStorage.getItem(id))
    )

    return profiles
  }

  /**
   * Replicate a database in a swarm using
   * db.discoveryKey as channel name
   */
  _startReplicate (db) {
    const discoveryKey = db.discoveryKey.toString('hex')
    this.hubs[discoveryKey] = signalhub(discoveryKey, HUB_URLS)
    this.swarms[discoveryKey] = swarm(this.hubs[discoveryKey], swarmOpts)
    this.swarms[discoveryKey].on('peer', peer => {
      const stream = db.replicate({ live: true })
      pump(peer, stream, peer)
    })
  }

  _stopAllReplicates () {
    Object.values(this.swarms).forEach(sw => sw.close())
    this.swarms = {}
    this.hubs = {}
  }

  _checkProfile () {
    if (!this.profileDB) throw Error('Open a profile first')
  }

  _closeUserAppConnection () {
    this.sw.on('close', () => {
      this.hub = null
      this.peer = null
      this.app = null
      // FIXME: do not clear this.key , as messages could
      // could still be sending while the connection is closing
    })
    this.sw.close()
  }
}

export default Masq
