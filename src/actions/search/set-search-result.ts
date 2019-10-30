import { Action } from 'redux'

import { SET_SEARCH_RESULT } from '../../consts/actions/search'
import { Apps } from '../../types/apps'
import { Persona } from '../../types/users'

export interface SetSearchResultAction extends Action<string> {
  personas: Persona[]
  apps: Apps
}

const setSearchResult = (personas: Persona[], apps: Apps): SetSearchResultAction => ({
  personas,
  apps,
  type: SET_SEARCH_RESULT,
})

export default setSearchResult
