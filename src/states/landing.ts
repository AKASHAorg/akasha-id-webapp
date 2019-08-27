export interface User {
  login: string
  firstName: string
  lastName: string
  password: string
}

export interface LandingState {
  login: string
  password: string
  logInModalErrorMessage: string
  signUpModalErrorMessage: string
  signUpStep: 'get-link' | 'enter-login' | 'send-claim' | 'request-profile'
  showLogInModal: boolean
  showSignUpModal: boolean
  loggedIn: boolean
  signUpLink: string | null
}

const defaultLandingState: LandingState = {
  login: '',
  password: '',
  logInModalErrorMessage: '',
  signUpModalErrorMessage: '',
  signUpStep: 'get-link',
  showLogInModal: false,
  showSignUpModal: false,
  loggedIn: false,
  signUpLink: null,
}

export { defaultLandingState }
