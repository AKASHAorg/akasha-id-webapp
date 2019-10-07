import { ProfileData } from '../types/users'

export interface ProfileState extends ProfileData {
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
  givenName: '',
  familyName: '',
  birthDate: '',
  telephone: '',
  url: '',
  showExportProfileModal: false,
  exportProfileText: '',
  about: '',
}

export { defaultProfileState }
