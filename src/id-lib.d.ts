/* tslint:disable */

declare module 'akasha-id-lib/src/index' {
  class Client {
    constructor(appInfo, config = {})
    public async registrationLink()
    public genNonce(min: number, max: number)
    public async requestProfile()
    public async refreshProfile(channel, token, rawKey)
    public cleanUp(hub)
  }

  class Wallet {
    public id: string
    constructor(config = {})
    public async init()
    public async signup(name, passphrase)
    public async login(userId, passphrase)
    public logout()
    public publicProfiles()
    async updateProfileList(userId, data)
    async removeProfile(id)
    async listen(refreshHandler)
    public did()
    public parseRegisterLink(str)
    public async handleRefresh(data)
    public async listen(refreshHandler: () => void)
    public async registerApp(data)
    public async sendClaim(req, attributes, allowed)
    public prepareClaim(attributes)
    public addClaim(token, key, attributes)
    public async getClaim(token)
    public removeClaim(token)
    public async addApp(token, appInfo)
    public async removeApp(appToken)
    public async apps()
    public cleanUp(hub)
  }

  function generateId(len?: number)

  const crypto = {
    importKey(key: any): any {},
    decrypt(key: any, msg: any, base: string): any {},
  }
}
