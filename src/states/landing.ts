import { Profile } from '../types/users'

export interface LandingState {
  users: Profile[]
  showSignInModal: boolean
  showSignUpModal: boolean
}

const defaultLandingState: LandingState = {
  users: [],
  showSignInModal: false,
  showSignUpModal: false,
}

export { defaultLandingState }
