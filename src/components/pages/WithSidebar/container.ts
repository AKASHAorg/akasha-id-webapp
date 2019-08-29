import { connect } from 'react-redux'
import { Action } from 'redux'
import { ThunkDispatch } from 'redux-thunk'

import signOut from '../../../actions/sign-out'
import { State } from '../../../states'
import WithSidebar from './WithSidebar'

const enchance = connect(
  (state: State) => ({}),
  (dispatch: ThunkDispatch<State, void, Action>) => ({
    onSignOut: () => dispatch(signOut()),
  }),
)

export default enchance(WithSidebar)
