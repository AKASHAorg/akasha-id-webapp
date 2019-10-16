import { Action } from 'redux'

import { SET_SEARCH_RESULT } from '../../consts/actions/search'
import { AppsList } from '../../types/apps'

export interface SetSearchResultAction extends Action<string> {
  apps: AppsList
}

const setSearchResult = (apps: AppsList): SetSearchResultAction => ({
  apps,
  type: SET_SEARCH_RESULT,
})

export default setSearchResult
