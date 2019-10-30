import { Action } from 'redux'

import { FETCH_PERSONA_APPS } from '../../consts/actions/persona'

export interface FetchPersonaAppsAction extends Action<string> {
  personaId: string
}

const fetchPersonaApps = (personaId: string): FetchPersonaAppsAction => ({
  personaId,
  type: FETCH_PERSONA_APPS,
})

export default fetchPersonaApps
