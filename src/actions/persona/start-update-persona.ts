import { Action } from 'redux'

import { START_UPDATE_PERSONA } from '../../consts/actions/persona'
import { PersonaData } from '../../types/users'

export interface StartUpdatePersonaAction extends Action<string> {
  personaData: PersonaData
}

const startUpdatePersona = (personaData: PersonaData): StartUpdatePersonaAction => ({
  personaData,
  type: START_UPDATE_PERSONA,
})

export default startUpdatePersona
