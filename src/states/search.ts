import { Apps } from '../types/apps'

export interface SearchState {
  searchText: string
  apps: Apps
}

const defaultSearchState: SearchState = {
  searchText: '',
  apps: [],
}

export { defaultSearchState }
