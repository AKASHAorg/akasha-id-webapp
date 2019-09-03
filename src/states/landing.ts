import { Profile } from '../types/users'

export interface LandingState {
  users: Profile[]
  userId: string
  name: string
  password: string
  nameError: string
  passwordError: string
  showSignInModal: boolean
  showSignUpModal: boolean
  profileFormValid: boolean
}

const defaultLandingState: LandingState = {
  users: [],
  userId: '',
  name: '',
  password: '',
  nameError: '',
  passwordError: '',
  showSignInModal: false,
  showSignUpModal: false,
  profileFormValid: false,
}

export { defaultLandingState }
