import { Action } from 'redux'

import { SET_SEARCH_RESULT } from '../../consts/actions/search'
import { Apps } from '../../types/apps'

export interface SetSearchResultAction extends Action<string> {
  apps: Apps
}

const setSearchResult = (apps: Apps): SetSearchResultAction => ({
  apps,
  type: SET_SEARCH_RESULT,
})

export default setSearchResult
