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
    constructor(options = {})
    public init()
    public did()
    public parseRegisterLink(str)
    public async handleRefresh(data)
    public async listen()
    public async registerApp(data)
    public async sendClaim(req, attributes, allowed, cb?)
    public newClaim(attributes)
    public async storeClaim(token, key, attributes, cb)
    public addApp(token, appInfo)
    public removeApp(appToken)
    public async listApps()
    public cleanUp(hub)
  }
}
