import { Action } from 'redux'

import { FETCH_PROFILES } from '../../consts/actions/profiles'

export interface FetchProfilesAction extends Action<string> {}

const fetchProfiles = (): FetchProfilesAction => ({
  type: FETCH_PROFILES,
})

export default fetchProfiles
