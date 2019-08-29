export interface ProfileState {
  username: string
  firstName: string
  lastName: string
  password: string
  firstNameError: string
  lastNameError: string
  passwordError: string
  signedIn: boolean
}

const defaultProfileState: ProfileState = {
  username: '',
  firstName: '',
  lastName: '',
  password: '',
  firstNameError: '',
  lastNameError: '',
  passwordError: '',
  signedIn: false,
}

export { defaultProfileState }
