import { Action } from 'redux'

import { FETCH_PUBLIC_PROFILES } from '../../consts/actions/landing'

export interface FetchPublicProfilesAction extends Action<string> {}

const fetchPublicProfiles = (): FetchPublicProfilesAction => ({
  type: FETCH_PUBLIC_PROFILES,
})

export default fetchPublicProfiles
