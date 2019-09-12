import { Action } from 'redux'

import { SET_EXPORT_PROFILE_TEXT } from '../../consts/actions/profile'

export interface SetExportProfileTextAction extends Action<string> {
  profileText: string
}

const setExportProfileText = (profileText: string): SetExportProfileTextAction => ({
  profileText,
  type: SET_EXPORT_PROFILE_TEXT,
})

export default setExportProfileText
