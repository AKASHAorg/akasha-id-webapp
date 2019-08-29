import { Action } from 'redux'
import { SHOW_SIGN_IN_MODAL } from '../consts/actions'

export interface ShowSignInModalAction extends Action<string> {
  username: string
}

const showSignInModal = (username: string): ShowSignInModalAction => ({
  username,
  type: SHOW_SIGN_IN_MODAL,
})

export default showSignInModal
