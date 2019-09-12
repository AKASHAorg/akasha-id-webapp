import { Action } from 'redux'

import { SHOW_EXPORT_PROFILE_MODAL } from '../../consts/actions/profile'

export interface ShowExportProfileModalAction extends Action<string> {}

const showExportProfileModal = (): ShowExportProfileModalAction => ({
  type: SHOW_EXPORT_PROFILE_MODAL,
})

export default showExportProfileModal
