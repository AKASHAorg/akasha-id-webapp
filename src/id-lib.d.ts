/* tslint:disable */

declare module 'akasha-id-lib/src/index' {
  class DIDclient {
    constructor(appInfo, options = {})
    public async registrationLink()
    public genNonce(min: number, max: number)
    public async requestProfile()
    public async refreshProfile(channel, token, rawKey)
    public cleanUp(hub)
  }

  class DIDwallet {
    constructor(id, options = {})
    public init(refreshHandler: (data: { msg: any; token: string }) => void)
    public did()
    public parseRegisterLink(str)
    public async handleRefresh(data)
    public async listen(refreshHandler: () => void)
    public async registerApp(data)
    public async sendClaim(req, attributes, allowed)
    public newClaim(attributes)
    public cleanUp(hub)
  }

  function generateId(len?: number)

  const crypto = {
    importKey(key: any): any {},
    decrypt(key: any, msg: any, base: string): any {},
  }
}
