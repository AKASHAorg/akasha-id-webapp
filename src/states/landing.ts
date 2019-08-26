export interface User {
  login: string
  firstName: string
  lastName: string
  password: string
}

export interface LandingState {
  users: User[]
  login: string
  password: string
  logInModalErrorMessage: string
  signUpModalErrorMessage: string
  signUpStep: 'get-link' | 'enter-login' | 'send-claim' | 'refresh-profile'
  showLogInModal: boolean
  showSignUpModal: boolean
  loggedIn: boolean
  signUpLink: string | null
  signUpData: any
}

const defaultLandingState: LandingState = {
  users: [
    {
      login: 'User1',
      firstName: 'User',
      lastName: '1',
      password: 'foo',
    },
    {
      login: 'User2',
      firstName: 'User',
      lastName: '2',
      password: 'bar',
    },
  ],
  login: '',
  password: '',
  logInModalErrorMessage: '',
  signUpModalErrorMessage: '',
  signUpStep: 'get-link',
  showLogInModal: false,
  showSignUpModal: false,
  loggedIn: false,
  signUpLink: null,
  signUpData: null,
}

export { defaultLandingState }
