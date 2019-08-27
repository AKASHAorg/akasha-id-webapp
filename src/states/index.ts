import { AppsState, defaultAppsState } from './apps'
import { defaultLandingState, LandingState } from './landing'
import { defaultProfileState, ProfileState } from './profile'

export interface State {
  landing: LandingState
  profile: ProfileState
  apps: AppsState
}

const defaultState: State = {
  landing: defaultLandingState,
  profile: defaultProfileState,
  apps: defaultAppsState,
}

export { defaultState }
