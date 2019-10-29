/* tslint:disable */

declare module 'akasha-id-wallet' {
  class Wallet {
    public id: string

    constructor(config = {})

    public async init(): void
    public did(): string
    public async signup(name: string, passphrase: string): string
    public async login(userId: string, passphrase: string)
    public async logout()
    public async account(): any
    public async updatePassphrase(oldPass, newPass)
    public async publicAccounts(): any[]
    public async updateAccountsList(account: { id: string; name: string; picture?: any })
    public async updateAccount(data: any)
    public async removeAccount()
    public async exportAccount(): { id: string; publicAccount: any; store: any }
    public async importProfile(data: any, passphrase: string, name: string)
    public async profile(id: string): any
    public async profiles(): any[]
    public async addProfile(profile: any)
    public async updateProfile(data: any)
    public async removeProfile(id: string)
    public async handleRefresh(data: any)
    public async listen(refreshHandler: () => void)
    public parseRegisterLink(str: atrign): string
    public async addApp(req: any, profileId: string, attributes: { [attribute: string]: boolean })
    public async removeApp(token: string)
    public async apps(profileId: string)
    public async registerApp(data: any)
    public async sendClaim(req: any, allowed: boolean)
    public async prepareClaim(token: string): any
    public addClaim(token: string, key: any)
    public async getClaim(token: string): any
    public removeClaim(token: string)
    public isLoggedIn(): boolean
    public cleanUp(hub: any)
  }

  export default Wallet
}
