/* tslint:disable */

declare module 'akasha-id-client' {
  class Client {
    constructor(appInfo, config = {})
    public async registrationLink()
    public genNonce(min: number, max: number)
    public async requestProfile()
    public async refreshProfile(claim)
    public getChannelFromDID(did)
    public cleanUp(hub)
  }

  export default Client
}
