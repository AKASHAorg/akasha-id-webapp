export interface User {
  login: string
  firstName: string
  lastName: string
  password: string
}

export interface AppRequest {
  appInfo: {
    name: string
    description: string
    icon: string
    url: string
  }
  channel: string
  key: string
  nonce: number
  token: string
}

export interface LandingState {
  login: string
  password: string
  logInModalErrorMessage: string
  signUpModalErrorMessage: string
  signUpStep: 'register-app' | 'enter-login' | 'send-claim' | 'request-profile'
  showLogInModal: boolean
  showSignUpModal: boolean
  loggedIn: boolean
  signUpLink: string | null
  appRequest: AppRequest | null
}

const defaultLandingState: LandingState = {
  login: '',
  password: '',
  logInModalErrorMessage: '',
  signUpModalErrorMessage: '',
  signUpStep: 'register-app',
  showLogInModal: false,
  showSignUpModal: false,
  loggedIn: false,
  signUpLink: null,
  appRequest: null,
}

export { defaultLandingState }
