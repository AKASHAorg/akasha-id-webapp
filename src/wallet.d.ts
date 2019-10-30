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
    public async importPersona(data: any, passphrase: string, name: string)
    public async persona(id: string): any
    public async personas(): any[]
    public async addPersona(persona: any)
    public async updatePersona(data: any)
    public async removePersona(id: string)
    public async handleRefresh(data: any)
    public async listen(refreshHandler: () => void)
    public parseRegisterLink(str: atrign): string
    public async addApp(req: any, personaId: string, attributes: { [attribute: string]: boolean })
    public async removeApp(token: string)
    public async apps(personaId: string)
    public async appInfo(token: string)
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
