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
  personaName: '',
  avatar: '',
  name: '',
  description: '',
  coverImage: '',
  email: '',
  url: '',
  address: '',
  ethAddress: '',
  showExportPersonaModal: false,
  exportPersonaText: '',
  redirect: false,
  apps: [],
}

export { defaultPersonaState }
