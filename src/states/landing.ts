import { Profile } from '../types/users'

export interface LandingState {
  users: Profile[]
  userId: string
  username: string
  password: string
  usernameError: string
  passwordError: string
  showSignInModal: boolean
  showSignUpModal: boolean
  profileFormValid: boolean
}

const defaultLandingState: LandingState = {
  users: [],
  userId: '',
  username: '',
  password: '',
  usernameError: '',
  passwordError: '',
  showSignInModal: false,
  showSignUpModal: false,
  profileFormValid: false,
}

export { defaultLandingState }
