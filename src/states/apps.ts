import { AddAppModalStep, App, AppRequest, AppsList, Claim } from '../types/apps'

export interface AppsState {
  apps: AppsList
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
