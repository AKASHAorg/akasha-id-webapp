import { Action } from 'redux'
import { HIDE_SIGN_IN_MODAL } from '../consts/actions'

export interface HideSignInModalAction extends Action<string> {}

const hideSignInModal = (): HideSignInModalAction => ({
  type: HIDE_SIGN_IN_MODAL,
})

export default hideSignInModal
