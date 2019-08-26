import { connect } from 'react-redux'
import { Action } from 'redux'
import { ThunkDispatch } from 'redux-thunk'

import showLogInModal from '../../../actions/show-log-in-modal'
import showSignUpModal from '../../../actions/show-sign-up-modal'
import { State } from '../../../states'
import Landing from './Landing'

const enchance = connect(
  (state: State) => ({
    loggedIn: state.landing.loggedIn,
    users: state.landing.users,
  }),
  (dispatch: ThunkDispatch<State, void, Action>) => ({
    onClickUser: (login: string) => () => dispatch(showLogInModal(login)),
    onSignUp: () => dispatch(showSignUpModal()),
  }),
)

export default enchance(Landing)
