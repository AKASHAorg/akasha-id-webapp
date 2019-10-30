import { Action } from 'redux'

import { SetSearchResultAction } from '../actions/search/set-search-result'
import { SetSearchTextAction } from '../actions/search/set-search-text'
import * as actions from '../consts/actions'
import { State } from '../states'
import { defaultSearchState, SearchState } from '../states/search'

const setSearchText = (
  state: SearchState,
  action: SetSearchTextAction,
  fullState: State,
): SearchState => {
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
    personas: [...action.personas],
    apps: [...action.apps],
  }
}

const reducer = (
  state: SearchState = defaultSearchState,
  action: Action<string>,
  fullState: State,
): SearchState => {
  switch (action.type) {
    case actions.search.SET_SEARCH_TEXT:
      return setSearchText(state, action as SetSearchTextAction, fullState)

    case actions.search.SET_SEARCH_RESULT:
      return setSearchResult(state, action as SetSearchResultAction, fullState)

    default:
      return state
  }
}

export default reducer
