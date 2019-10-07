import { App, Claim } from '../types/apps'

export interface AppDetailsState {
  app?: App
  token: string
  claim?: Claim
  redirectToApps: boolean
}

const defaultAppDetailsState: AppDetailsState = {
  app: undefined,
  token: '',
  claim: undefined,
  redirectToApps: false,
}

export { defaultAppDetailsState }
