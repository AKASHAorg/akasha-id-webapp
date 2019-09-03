export interface ProfileState {
  userId: string
  username: string
  password: string
  usernameError: string
  passwordError: string
  signedIn: boolean
  profileFormValid: boolean
}

const defaultProfileState: ProfileState = {
  userId: '',
  username: '',
  password: '',
  usernameError: '',
  passwordError: '',
  signedIn: false,
  profileFormValid: false,
}

export { defaultProfileState }
