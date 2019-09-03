import { connect } from 'react-redux'
import { Action } from 'redux'
import { ThunkDispatch } from 'redux-thunk'

import changeUsername from '../../../actions/change-name'
import changePassword from '../../../actions/change-password'
import hideSignUpModal from '../../../actions/hide-sign-up-modal'
import signUp from '../../../actions/sign-up'
import { State } from '../../../states'
import SignUpModal from './SignUpModal'

const enchance = connect(
  (state: State) => ({
    isOpen: state.landing.showSignUpModal,
    username: state.landing.name,
    password: state.landing.password,
    usernameError: state.landing.nameError,
    passwordError: state.landing.passwordError,
  }),
  (dispatch: ThunkDispatch<State, void, Action>) => ({
    onClose: () => dispatch(hideSignUpModal()),
    onOk: async () => await dispatch(signUp()),
    onChangeUserName: (username: string) => dispatch(changeUsername(username)),
    onChangePassword: (password: string) => dispatch(changePassword(password)),
  }),
)

export default enchance(SignUpModal)
