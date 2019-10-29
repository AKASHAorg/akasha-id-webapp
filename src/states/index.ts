import { FormStateMap } from 'redux-form'
import { AccountState, defaultAccountState } from './account'
import { AppDetailsState, defaultAppDetailsState } from './app-details'
import { AppsState, defaultAppsState } from './apps'
import { defaultLandingState, LandingState } from './landing'
import { defaultProfileState, ProfileState } from './profile'
import { defaultProfilesState, ProfilesState } from './profiles'
import { defaultSearchState, SearchState } from './search'

export interface State {
  form: FormStateMap | undefined
  landing: LandingState
  profiles: ProfilesState
  profile: ProfileState
  apps: AppsState
  account: AccountState
  appDetails: AppDetailsState
  search: SearchState
}

const defaultState: State = {
  form: undefined,
  landing: defaultLandingState,
  profiles: defaultProfilesState,
  profile: defaultProfileState,
  apps: defaultAppsState,
  account: defaultAccountState,
  appDetails: defaultAppDetailsState,
  search: defaultSearchState,
}

export { defaultState }
