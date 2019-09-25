export interface ProfileState {
  userId: string
  addressLocality: string
  addressRegion: string
  postalCode: string
  streetAddress: string
  email: string
  photo: string
  picture: string
  jobTitle: string
  name: string
  givenName: string
  familyName: string
  birthDate: string
  telephone: string
  url: string
  password: string
  signedIn: boolean
  showExportProfileModal: boolean
  exportProfileText: string
}

const defaultProfileState: ProfileState = {
  userId: '',
  addressLocality: '',
  addressRegion: '',
  postalCode: '',
  streetAddress: '',
  email: '',
  photo: '',
  picture: '',
  jobTitle: '',
  name: '',
  givenName: '',
  familyName: '',
  birthDate: '',
  telephone: '',
  url: '',
  password: '',
  signedIn: false,
  showExportProfileModal: false,
  exportProfileText: '',
}

export { defaultProfileState }
