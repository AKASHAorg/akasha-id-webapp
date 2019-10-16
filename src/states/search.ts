import { AppsList } from '../types/apps'

export interface SearchState {
  searchText: string
  apps: AppsList
}

const defaultSearchState: SearchState = {
  searchText: '',
  apps: {},
}

export { defaultSearchState }
