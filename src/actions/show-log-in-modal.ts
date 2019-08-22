import { Action } from 'redux'
import { SHOW_LOG_IN_MODAL } from '../consts/actions'

export interface ShowLogInModalAction extends Action<string> {
  login: string
}

const showLogInModal = (login: string): ShowLogInModalAction => ({
  login,
  type: SHOW_LOG_IN_MODAL,
})

export default showLogInModal
