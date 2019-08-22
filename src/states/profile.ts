export interface ProfileState {
  login: string
  firstName: string
  lastName: string
  password: string
}

const defaultProfileState: ProfileState = {
  login: '',
  firstName: '',
  lastName: '',
  password: '',
}

export { defaultProfileState }
