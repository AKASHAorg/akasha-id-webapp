import { AddAppModalStep, App, AppRequest } from '../types/apps'

export interface AppsState {
  apps: { [token: string]: App }
  addAppStep: AddAppModalStep
  signUpLink: string | null
  appRequest: AppRequest | null
  showAddAppModal: boolean
}

const defaultAppsState: AppsState = {
  apps: {},
  addAppStep: 'generate-link',
  signUpLink: null,
  appRequest: null,
  showAddAppModal: false,
}

export { defaultAppsState }
