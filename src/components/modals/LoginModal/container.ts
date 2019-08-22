import { connect } from 'react-redux'

import changePassword from '../../../actions/change-password'
import hideLogInModal from '../../../actions/hide-log-in-modal'
import logIn from '../../../actions/log-in'
import { State } from '../../../states'
import LogInModal from './LoginModal'

const enchance = connect(
  (state: State) => ({
    isOpen: state.landing.showLogInModal,
    password: state.landing.password,
    errorMessage: state.landing.logInModalErrorMessage,
  }),
  dispatch => ({
    onCancel: () => dispatch(hideLogInModal()),
    onChangePassword: (password: string) => dispatch(changePassword(password)),
    onOk: () => dispatch(logIn()),
  }),
)

export default enchance(LogInModal)
