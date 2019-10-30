import { Action } from 'redux'

import { START_CREATE_PERSONA } from '../../consts/actions/persona'
import { PersonaData } from '../../types/users'

export interface StartCreatePersonaAction extends Action<string> {
  personaData: PersonaData
}

const startCreatePersona = (personaData: PersonaData): StartCreatePersonaAction => ({
  personaData,
  type: START_CREATE_PERSONA,
})

export default startCreatePersona
