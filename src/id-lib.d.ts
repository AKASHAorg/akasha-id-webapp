/* tslint:disable */

declare module 'akasha-id-lib/src/index' {
  class Client {
    constructor(appInfo, config = {})
    public async registrationLink()
    public genNonce(min: number, max: number)
    public async requestProfile()
    public async refreshProfile(claim)
    public getChannelFromDID(did)
    public cleanUp(hub)
  }

  class Wallet {
    public id: string
    constructor(config = {})
    public async init()
    public async signup(name, passphrase)
    public async login(userId, passphrase)
    public async logout()
    public async profile()
    public async updateProfile(data)
    public async updatePassphrase(oldPass, newPass)
    public publicProfiles()
    public async updateProfileList(userId, data)
    public async removeProfile(id)
    public currentDID()
    public async listen(refreshHandler)
    public parseRegisterLink(str)
    public async handleRefresh(data)
    public async listen(refreshHandler: () => void)
    public async addApp(token, appInfo)
    public async removeApp(appToken)
    public async apps()
    public async registerApp(data)
    public async sendClaim(req, attributes, allowed)
    public async prepareClaim(attributes)
    public addClaim(token, key, attributes)
    public async getClaim(token)
    public removeClaim(token)
    public isLoggedIn()
    public cleanUp(hub)
  }

  function generateId(len?: number)

  const crypto = {
    importKey(key: any): any {},
    decrypt(key: any, msg: any, base: string): any {},
  }
}
