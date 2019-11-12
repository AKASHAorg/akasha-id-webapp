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
    public async requestPersona(attributes: string[])
    public async refreshPersona(claim)
    public getChannelFromDID(did)
    public cleanUp(hub)
  }

  export default Client
}
