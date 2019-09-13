import { AddAppModalStep, App, AppRequest, Claim } from '../types/apps'

export interface AppsState {
  apps: { [token: string]: App }
  addAppStep: AddAppModalStep
  appRequest: AppRequest | null
  selectedApp?: App
  selectedAppToken: string
  selectedAppClaim?: Claim
  showAddAppModal: boolean
  showRemoveAppModal: boolean
  registerAppLink?: string
}

const defaultAppsState: AppsState = {
  apps: {},
  addAppStep: 'generate-link',
  appRequest: null,
  selectedApp: undefined,
  selectedAppToken: '',
  selectedAppClaim: undefined,
  showAddAppModal: false,
  showRemoveAppModal: false,
  registerAppLink: undefined,
}

export { defaultAppsState }
