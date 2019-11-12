import { Apps } from '../types/apps'
import { Persona } from '../types/users'

export interface PersonasState {
  personas: Persona[]
  apps: { [personaId: string]: Apps }
}

const defaultPersonasState: PersonasState = {
  personas: [],
  apps: {},
}

export { defaultPersonasState }
