import { Apps } from '../types/apps'
import { Persona } from '../types/users'

export interface PersonaState extends Persona {
  apps: Apps
  showExportPersonaModal: boolean
  exportPersonaText: string
  redirect: boolean
}

const defaultPersonaState: PersonaState = {
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
  showExportPersonaModal: false,
  exportPersonaText: '',
  about: '',
  location: '',
  personaName: '',
  redirect: false,
  apps: [],
}

export { defaultPersonaState }
