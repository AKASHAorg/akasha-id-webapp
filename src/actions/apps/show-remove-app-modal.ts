import { Action } from 'redux'

import { SHOW_REMOVE_APP_MODAL } from '../../consts/actions/apps'

export interface ShowRemoveAppModalAction extends Action<string> {
  token: string
}

const showRemoveAppModal = (token: string): ShowRemoveAppModalAction => ({
  token,
  type: SHOW_REMOVE_APP_MODAL,
})

export default showRemoveAppModal
