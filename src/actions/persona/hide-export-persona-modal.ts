import { Action } from 'redux'

import { HIDE_EXPORT_PERSONA_MODAL } from '../../consts/actions/persona'

export interface HideExportPersonaModalAction extends Action<string> {}

const hideExportPersonaModal = (): HideExportPersonaModalAction => ({
  type: HIDE_EXPORT_PERSONA_MODAL,
})

export default hideExportPersonaModal
