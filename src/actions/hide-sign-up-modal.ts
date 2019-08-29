import { Action } from 'redux'
import { HIDE_SIGN_UP_MODAL } from '../consts/actions'

export interface HideSignUpModalAction extends Action<string> {}

const hideSignUpModal = (): HideSignUpModalAction => ({
  type: HIDE_SIGN_UP_MODAL,
})

export default hideSignUpModal
