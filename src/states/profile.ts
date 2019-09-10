export interface ProfileState {
  userId: string
  addressLocality: string
  addressRegion: string
  postalCode: string
  streetAddress: string
  email: string
  photo: string
  image: string
  jobTitle: string
  name: string
  givenName: string
  familyName: string
  birthDate: string
  telephone: string
  url: string
  password: string
  signedIn: boolean
}

const defaultProfileState: ProfileState = {
  userId: '',
  addressLocality: '',
  addressRegion: '',
  postalCode: '',
  streetAddress: '',
  email: '',
  photo: '',
  image: '',
  jobTitle: '',
  name: '',
  givenName: '',
  familyName: '',
  birthDate: '',
  telephone: '',
  url: '',
  password: '',
  signedIn: false,
}

export { defaultProfileState }
