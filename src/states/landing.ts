import { Account } from '../types/users'

export interface LandingState {
  users: Account[]
  showSignInModal: boolean
  showSignUpModal: boolean
  registerAppLink?: string
}

const defaultLandingState: LandingState = {
  users: [],
  showSignInModal: false,
  showSignUpModal: false,
  registerAppLink: undefined,
}

export { defaultLandingState }
