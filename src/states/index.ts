import { FormStateMap } from 'redux-form'
import { AccountState, defaultAccountState } from './account'
import { AppDetailsState, defaultAppDetailsState } from './app-details'
import { AppsState, defaultAppsState } from './apps'
import { defaultLandingState, LandingState } from './landing'
import { defaultProfileState, ProfileState } from './profile'

export interface State {
  form: FormStateMap | undefined
  landing: LandingState
  profile: ProfileState
  apps: AppsState
  account: AccountState
  appDetails: AppDetailsState
}

const defaultState: State = {
  form: undefined,
  landing: defaultLandingState,
  profile: defaultProfileState,
  apps: defaultAppsState,
  account: defaultAccountState,
  appDetails: defaultAppDetailsState,
}

export { defaultState }
