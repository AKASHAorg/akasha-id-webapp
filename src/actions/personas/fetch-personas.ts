import { Action } from 'redux'

import { FETCH_PERSONAS } from '../../consts/actions/personas'

export interface FetchPersonasAction extends Action<string> {}

const fetchPersonas = (): FetchPersonasAction => ({
  type: FETCH_PERSONAS,
})

export default fetchPersonas
