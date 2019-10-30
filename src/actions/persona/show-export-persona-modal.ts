import { Action } from 'redux'

import { SHOW_EXPORT_PERSONA_MODAL } from '../../consts/actions/persona'

export interface ShowExportPersonaModalAction extends Action<string> {}

const showExportPersonaModal = (): ShowExportPersonaModalAction => ({
  type: SHOW_EXPORT_PERSONA_MODAL,
})

export default showExportPersonaModal
