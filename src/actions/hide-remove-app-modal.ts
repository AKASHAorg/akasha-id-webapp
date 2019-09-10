import { Action } from 'redux'

import { HIDE_REMOVE_APP_MODAL } from '../consts/actions'

export interface HideRemoveAppModalAction extends Action<string> {}

const hideRemoveAppModal = (): HideRemoveAppModalAction => ({
  type: HIDE_REMOVE_APP_MODAL,
})

export default hideRemoveAppModal
