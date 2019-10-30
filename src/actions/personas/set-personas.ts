import { Action } from 'redux'

import { SET_PERSONAS } from '../../consts/actions/personas'
import { Persona } from '../../types/users'

export interface SetPersonasAction extends Action<string> {
  personas: Persona[]
}

const setPersonas = (personas: Persona[]): SetPersonasAction => ({
  personas,
  type: SET_PERSONAS,
})

export default setPersonas
