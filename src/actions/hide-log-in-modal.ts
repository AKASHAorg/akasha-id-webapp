import { Action } from 'redux'
import { HIDE_LOG_IN_MODAL } from '../consts/actions'

export interface HideLogInModalAction extends Action<string> {}

const hideLogInModal = (): HideLogInModalAction => ({
  type: HIDE_LOG_IN_MODAL,
})

export default hideLogInModal
