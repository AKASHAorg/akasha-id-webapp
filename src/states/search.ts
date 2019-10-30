import { Apps } from '../types/apps'
import { Persona } from '../types/users'

export interface SearchState {
  searchText: string
  personas: Persona[]
  apps: Apps
}

const defaultSearchState: SearchState = {
  searchText: '',
  personas: [],
  apps: [],
}

export { defaultSearchState }
