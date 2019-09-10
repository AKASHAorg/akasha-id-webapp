import { Action } from 'redux'

import { HIDE_ADD_APP_MODAL } from '../consts/actions'

export interface HideAddAppModalAction extends Action<string> {}

const hideAddAppModal = (): HideAddAppModalAction => ({
  type: HIDE_ADD_APP_MODAL,
})

export default hideAddAppModal
