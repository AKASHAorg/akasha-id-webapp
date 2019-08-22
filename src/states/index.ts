import { defaultLandingState, LandingState } from './landing'
import { defaultProfileState, ProfileState } from './profile'

export interface State {
  landing: LandingState
  profile: ProfileState
}

const defaultState: State = {
  landing: defaultLandingState,
  profile: defaultProfileState,
}

export { defaultState }
