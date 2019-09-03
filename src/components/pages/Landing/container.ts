import { connect } from 'react-redux'
import { Action } from 'redux'
import { ThunkDispatch } from 'redux-thunk'

import loadUsers from '../../../actions/load-users'
import showSignUpModal from '../../../actions/show-sign-up-modal'
import { State } from '../../../states'
import Landing from './Landing'

const enchance = connect(
  (state: State) => ({
    users: state.landing.users,
  }),
  (dispatch: ThunkDispatch<State, void, Action>) => ({
    onSignUp: () => dispatch(showSignUpModal()),
    loadUsers: () => dispatch(loadUsers()),
  }),
)

export default enchance(Landing)
