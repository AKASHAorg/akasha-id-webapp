import { Action } from 'redux'

import { SEARCH } from '../../consts/actions/search'

export interface SearchAction extends Action<string> {
  searchText: string
}

const search = (searchText: string): SearchAction => ({
  searchText,
  type: SEARCH,
})

export default search
