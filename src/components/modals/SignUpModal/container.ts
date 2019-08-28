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
    name: state.landing.appRequest ? state.landing.appRequest.appInfo.name : '',
    description: state.landing.appRequest ? state.landing.appRequest.appInfo.description : '',
    icon: state.landing.appRequest ? state.landing.appRequest.appInfo.icon : '',
    url: state.landing.appRequest ? state.landing.appRequest.appInfo.url : '',
    channel: state.landing.appRequest ? state.landing.appRequest.channel : '',
    appKey: state.landing.appRequest ? state.landing.appRequest.key : '',
    nonce: state.landing.appRequest ? state.landing.appRequest.nonce : 0,
    token: state.landing.appRequest ? state.landing.appRequest.token : '',
  }),
  (dispatch: ThunkDispatch<State, void, Action>) => ({
    onClose: () => dispatch(hideSignUpModal()),
    onOk: () => dispatch(signUp()),
    onChangeLogin: (login: string) => dispatch(changeLogin(login)),
  }),
)

export default enchance(SignUpModal)
