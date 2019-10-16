import { Action } from 'redux'

import { SearchAction } from '../actions/search/search'
import { SetSearchResultAction } from '../actions/search/set-search-result'
import * as actions from '../consts/actions'
import { State } from '../states'
import { defaultSearchState, SearchState } from '../states/search'

const search = (state: SearchState, action: SearchAction, fullState: State): SearchState => {
  return {
    ...state,
    searchText: action.searchText,
  }
}

const setSearchResult = (
  state: SearchState,
  action: SetSearchResultAction,
  fullState: State,
): SearchState => {
  return {
    ...state,
    apps: { ...action.apps },
  }
}

const reducer = (
  state: SearchState = defaultSearchState,
  action: Action<string>,
  fullState: State,
): SearchState => {
  switch (action.type) {
    case actions.search.SEARCH:
      return search(state, action as SearchAction, fullState)

    case actions.search.SET_SEARCH_RESULT:
      return setSearchResult(state, action as SetSearchResultAction, fullState)

    default:
      return state
  }
}

export default reducer
