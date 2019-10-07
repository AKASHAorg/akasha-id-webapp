import { Action } from 'redux'

import { FETCH_CLAIM } from '../../consts/actions/app-details'

export interface FetchClaimAction extends Action<string> {
  token: string
}

const fetchClaim = (token: string): FetchClaimAction => ({
  token,
  type: FETCH_CLAIM,
})

export default fetchClaim
