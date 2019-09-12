/* tslint:disable */

declare module 'akasha-id-wallet' {
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
    public async exportProfile()
    public async importProfile(data, passphrase, name)
    public currentDID()
    public async listen(refreshHandler: () => void)
    public parseRegisterLink(str)
    public async handleRefresh(data)
    public async addApp(token, appInfo)
    public async removeApp(token)
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

  export default Wallet
}
