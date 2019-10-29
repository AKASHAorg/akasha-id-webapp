import { Profile } from '../types/users'

export interface ProfileState extends Profile {
  showExportProfileModal: boolean
  exportProfileText: string
  redirect: boolean
}

const defaultProfileState: ProfileState = {
  id: '',
  address: {
    addressLocality: '',
    addressRegion: '',
    postalCode: '',
    streetAddress: '',
  },
  email: '',
  photo: '',
  picture: '',
  jobTitle: '',
  givenName: '',
  familyName: '',
  birthDate: '',
  telephone: '',
  url: '',
  showExportProfileModal: false,
  exportProfileText: '',
  about: '',
  location: '',
  profileName: '',
  redirect: false,
}

export { defaultProfileState }
