import { Action } from 'redux'

import { FETCH_PROFILE } from '../../consts/actions/profile'

export interface FetchProfileAction extends Action<string> {
  id: string
}

const fetchProfile = (id: string): FetchProfileAction => ({
  id,
  type: FETCH_PROFILE,
})

export default fetchProfile
