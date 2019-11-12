import { Action } from 'redux'

import { FETCH_PERSONA } from '../../consts/actions/persona'

export interface FetchPersonaAction extends Action<string> {
  id: string
}

const fetchPersona = (id: string): FetchPersonaAction => ({
  id,
  type: FETCH_PERSONA,
})

export default fetchPersona
