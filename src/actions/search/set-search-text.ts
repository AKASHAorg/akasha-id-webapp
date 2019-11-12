import { Action } from 'redux'

import { SET_SEARCH_TEXT } from '../../consts/actions/search'

export interface SetSearchTextAction extends Action<string> {
  searchText: string
}

const setSearchText = (searchText: string): SetSearchTextAction => ({
  searchText,
  type: SET_SEARCH_TEXT,
})

export default setSearchText
