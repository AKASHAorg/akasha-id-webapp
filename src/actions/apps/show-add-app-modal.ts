import { Action } from 'redux'

import { SHOW_ADD_APP_MODAL } from '../../consts/actions/apps'

export interface ShowAddAppModalAction extends Action<string> {}

const showAddAppModal = (): ShowAddAppModalAction => ({
  type: SHOW_ADD_APP_MODAL,
})

export default showAddAppModal
