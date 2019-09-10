import { AddAppModalStep, App, AppRequest, Claim } from '../types/apps'

export interface AppsState {
  apps: { [token: string]: App }
  addAppStep: AddAppModalStep
  signUpLink: string | null
  appRequest: AppRequest | null
  selectedApp?: App
  selectedAppToken: string
  selectedAppClaim?: Claim
  showAddAppModal: boolean
  showRemoveAppModal: boolean
}

const defaultAppsState: AppsState = {
  apps: {},
  addAppStep: 'generate-link',
  signUpLink: null,
  appRequest: null,
  selectedAppToken: '',
  showAddAppModal: false,
  showRemoveAppModal: false,
}

export { defaultAppsState }
