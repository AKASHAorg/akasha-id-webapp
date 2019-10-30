import { Action } from 'redux'

import { SET_PERSONA } from '../../consts/actions/persona'
import { Persona } from '../../types/users'

export interface SetPersonaAction extends Action<string> {
  persona?: Persona
}

const setPersona = (persona?: Persona): SetPersonaAction => ({
  persona,
  type: SET_PERSONA,
})

export default setPersona
