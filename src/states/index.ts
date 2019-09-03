import { FormStateMap } from 'redux-form'
import { AppsState, defaultAppsState } from './apps'
import { defaultLandingState, LandingState } from './landing'
import { defaultProfileState, ProfileState } from './profile'

export interface State {
  form: FormStateMap | undefined
  landing: LandingState
  profile: ProfileState
  apps: AppsState
}

const defaultState: State = {
  form: undefined,
  landing: defaultLandingState,
  profile: defaultProfileState,
  apps: defaultAppsState,
}

export { defaultState }
