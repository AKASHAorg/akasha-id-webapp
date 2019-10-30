import { Action } from 'redux'

import { FETCH_PERSONAS_APPS } from '../../consts/actions/personas'

export interface FetchPersonasAppsAction extends Action<string> {}

const fetchPersonasApps = (): FetchPersonasAppsAction => ({
  type: FETCH_PERSONAS_APPS,
})

export default fetchPersonasApps
