import { connect } from 'react-redux'

import changeLogin from '../../../actions/change-login'
import changePassword from '../../../actions/change-password'
import hideSignUpModal from '../../../actions/hide-sign-up-modal'
import signUp from '../../../actions/sign-up'
import { State } from '../../../states'
import SignUpModal from './SignUpModal'

const enchance = connect(
  (state: State) => ({
    isOpen: state.landing.showSignUpModal,
    step: state.landing.signUpStep,
    login: state.landing.login,
    password: state.landing.password,
    errorMessage: state.landing.signUpModalErrorMessage,
  }),
  dispatch => ({
    onCancel: () => dispatch(hideSignUpModal()),
    onChangeLogin: (login: string) => dispatch(changeLogin(login)),
    onChangePassword: (password: string) => dispatch(changePassword(password)),
    onOk: () => dispatch(signUp()),
  }),
)

export default enchance(SignUpModal)
