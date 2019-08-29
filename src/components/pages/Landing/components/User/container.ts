import { connect } from 'react-redux'

import showSignInModal from '../../../../../actions/show-sign-in-modal'
import { State } from '../../../../../states'
import User from './User'

const enchance = connect(
  (state: State) => ({}),
  dispatch => ({
    onSignIn: (username: string) => dispatch(showSignInModal(username)),
  }),
)

export default enchance(User)
