export interface ProfileData {
  allowed?: boolean
  claim?: {
    issuer?: string
    credentialSubject?: {
      id?: string
    }
  }
  token?: string
  refreshEncKey?: string
}

export interface ProfileState {
  login: string
  firstName: string
  lastName: string
  password: string
  profileData?: ProfileData
}

const defaultProfileState: ProfileState = {
  login: '',
  firstName: '',
  lastName: '',
  password: '',
  profileData: {},
}

export { defaultProfileState }
