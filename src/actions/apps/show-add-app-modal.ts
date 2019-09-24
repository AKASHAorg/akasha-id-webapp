import { Action } from 'redux'

import { SHOW_ADD_APP_MODAL } from '../../consts/actions/apps'

export interface ShowAddAppModalAction extends Action<string> {
  link: string
}

const showAddAppModal = (link: string): ShowAddAppModalAction => ({
  link,
  type: SHOW_ADD_APP_MODAL,
})

export default showAddAppModal
