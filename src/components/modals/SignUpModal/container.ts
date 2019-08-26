import { connect } from 'react-redux'
import { Action } from 'redux'
import { ThunkDispatch } from 'redux-thunk'

import changeLogin from '../../../actions/change-login'
import hideSignUpModal from '../../../actions/hide-sign-up-modal'
import signUp from '../../../actions/sign-up'
import { State } from '../../../states'
import SignUpModal from './SignUpModal'

const enchance = connect(
  (state: State) => ({
    step: state.landing.signUpStep,
    login: state.landing.login,
    isOpen: state.landing.showSignUpModal,
    signUpLink: state.landing.signUpLink,
    signUpData: state.landing.signUpData,
  }),
  (dispatch: ThunkDispatch<State, void, Action>) => ({
    onClose: () => dispatch(hideSignUpModal()),
    onOk: () => dispatch(signUp()),
    onChangeLogin: (login: string) => dispatch(changeLogin(login)),
  }),
)

export default enchance(SignUpModal)
