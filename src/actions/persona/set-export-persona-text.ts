import { Action } from 'redux'

import { SET_EXPORT_PERSONA_TEXT } from '../../consts/actions/persona'

export interface SetExportPersonaTextAction extends Action<string> {
  personaText: string
}

const setExportPersonaText = (personaText: string): SetExportPersonaTextAction => ({
  personaText,
  type: SET_EXPORT_PERSONA_TEXT,
})

export default setExportPersonaText
