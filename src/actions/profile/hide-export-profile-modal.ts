import { Action } from 'redux'

import { HIDE_EXPORT_PROFILE_MODAL } from '../../consts/actions/profile'

export interface HideExportProfileModalAction extends Action<string> {}

const hideExportProfileModal = (): HideExportProfileModalAction => ({
  type: HIDE_EXPORT_PROFILE_MODAL,
})

export default hideExportProfileModal
