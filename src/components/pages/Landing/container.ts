import { connect } from 'react-redux'
import showLogInModal from '../../../actions/show-log-in-modal'
import showSignUpModal from '../../../actions/show-sign-up-modal'
import { State } from '../../../states'
import Landing from './Landing'

const enchance = connect(
  (state: State) => ({
    loggedIn: state.landing.loggedIn,
    users: state.landing.users,
  }),
  dispatch => ({
    onClickUser: (login: string) => () => {
      dispatch(showLogInModal(login))
    },
    onSignUp: () => dispatch(showSignUpModal()),
  }),
)

export default enchance(Landing)
