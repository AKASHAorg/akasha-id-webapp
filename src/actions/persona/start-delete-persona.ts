import { Action } from 'redux'

import { START_DELETE_PERSONA } from '../../consts/actions/persona'

export interface StartDeletePersonaAction extends Action<string> {
  id: string
}

const startDeletePersona = (id: string): StartDeletePersonaAction => ({
  id,
  type: START_DELETE_PERSONA,
})

export default startDeletePersona
