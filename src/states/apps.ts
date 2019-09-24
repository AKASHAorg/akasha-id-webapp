import { AddAppModalStep, App, AppRequest, Claim } from '../types/apps'

export interface AppsState {
  apps: { [token: string]: App }
  addAppModalStep: AddAppModalStep
  appRequest: AppRequest | null
  selectedApp?: App
  selectedAppToken: string
  selectedAppClaim?: Claim
  showRemoveAppModal: boolean
}

const defaultAppsState: AppsState = {
  apps: {},
  addAppModalStep: 'wait-request',
  appRequest: null,
  selectedApp: undefined,
  selectedAppToken: '',
  selectedAppClaim: undefined,
  showRemoveAppModal: false,
}

export { defaultAppsState }
