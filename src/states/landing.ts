export interface User {
  username: string
  firstName: string
  lastName: string
  password: string
}

export interface LandingState {
  users: User[]
  username: string
  password: string
  usernameError: string
  passwordError: string
  showSignInModal: boolean
  showSignUpModal: boolean
}

const defaultLandingState: LandingState = {
  users: [],
  username: '',
  password: '',
  usernameError: '',
  passwordError: '',
  showSignInModal: false,
  showSignUpModal: false,
}

export { defaultLandingState }
