import { Action } from 'redux'
import { SHOW_SIGN_UP_MODAL } from '../consts/actions'

export interface ShowSignUpModalAction extends Action<string> {}

const showSignUpModal = (): ShowSignUpModalAction => ({
  type: SHOW_SIGN_UP_MODAL,
})

export default showSignUpModal
