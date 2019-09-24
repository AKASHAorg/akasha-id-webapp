/* tslint:disable */

declare module 'akasha-id-client' {
  class Client {
    constructor(appInfo, config = {})
    public loginChannel: any
    public bootstrapKey: any
    public nonce: any
    public loginLink: any

    public async registrationLink()
    public genNonce(min: number, max: number)
    public async requestProfile(attributes: string[])
    public async refreshProfile(claim)
    public getChannelFromDID(did)
    public cleanUp(hub)
  }

  export default Client
}
