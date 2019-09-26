import { ProfileFormData } from '../types/users'

export interface ProfileState extends ProfileFormData {
  userId: string
  signedIn: boolean
  showExportProfileModal: boolean
  exportProfileText: string
}

const defaultProfileState: ProfileState = {
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
  name: '',
  givenName: '',
  familyName: '',
  birthDate: '',
  telephone: '',
  url: '',
  userId: '',
  signedIn: false,
  showExportProfileModal: false,
  exportProfileText: '',
}

export { defaultProfileState }
