import { connect } from 'react-redux'
import { Action, Dispatch } from 'redux'

import search from '../../../actions/search/search'
import { State } from '../../../states'
import Search from './Search'

const enchance = connect(
  (state: State) => ({
    searchText: state.search.searchText,
    apps: state.search.apps,
  }),
  (dispatch: Dispatch<Action>) => ({
    search: (searchText: string) => dispatch(search(searchText)),
  }),
)

export default enchance(Search)
