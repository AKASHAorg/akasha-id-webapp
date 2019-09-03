export interface ProfileState {
  userId: string
  name: string
  password: string
  signedIn: boolean
}

const defaultProfileState: ProfileState = {
  userId: '',
  name: '',
  password: '',
  signedIn: false,
}

export { defaultProfileState }
