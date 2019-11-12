import { connect } from 'react-redux'
import { Action, Dispatch } from 'redux'

import setSearchText from '../../../actions/search/set-search-text'
import startSearching from '../../../actions/search/start-searching'
import { State } from '../../../states'
import Search from './Search'

const enchance = connect(
  (state: State) => ({
    searchText: state.search.searchText,
    personas: state.search.personas,
    apps: state.search.apps,
  }),
  (dispatch: Dispatch<Action>) => ({
    search: (searchText: string) => dispatch(setSearchText(searchText)),
    startSearching: () => dispatch(startSearching()),
  }),
)

export default enchance(Search)
