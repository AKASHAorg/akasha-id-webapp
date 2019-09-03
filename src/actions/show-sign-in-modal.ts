import { Action } from 'redux'
import { SHOW_SIGN_IN_MODAL } from '../consts/actions'

export interface ShowSignInModalAction extends Action<string> {
  userId: string
}

const showSignInModal = (userId: string): ShowSignInModalAction => ({
  userId,
  type: SHOW_SIGN_IN_MODAL,
})

export default showSignInModal
