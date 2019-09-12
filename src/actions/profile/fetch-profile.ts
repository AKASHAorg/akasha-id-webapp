import { Action } from 'redux'

import { FETCH_PROFILE } from '../../consts/actions/profile'

export interface FetchProfileAction extends Action<string> {}

const fetchProfile = (): FetchProfileAction => ({
  type: FETCH_PROFILE,
})

export default fetchProfile
