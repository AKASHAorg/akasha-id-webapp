import { connect } from 'react-redux'
import { Action } from 'redux'
import { ThunkDispatch } from 'redux-thunk'

import changePassword from '../../../actions/change-password'
import hideSignInModal from '../../../actions/hide-sign-in-modal'
import signIn from '../../../actions/sign-in'
import { State } from '../../../states'
import SignInModal from './SignInModal'

const enchance = connect(
  (state: State) => ({
    isOpen: state.landing.showSignInModal,
    username: state.landing.username,
    password: state.landing.password,
    passwordError: state.landing.passwordError,
  }),
  (dispatch: ThunkDispatch<State, void, Action>) => ({
    onClose: () => dispatch(hideSignInModal()),
    onOk: () => dispatch(signIn()),
    onChangePassword: (password: string) => dispatch(changePassword(password)),
  }),
)

export default enchance(SignInModal)
