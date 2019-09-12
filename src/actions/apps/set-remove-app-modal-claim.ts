import { Action } from 'redux'

import { SET_REMOVE_APP_MODAL_CLAIM } from '../../consts/actions/apps'
import { Claim } from '../../types/apps'

export interface SetRemoveAppModalClaimAction extends Action<string> {
  token: string
  claim: Claim
}

const setRemoveAppModalClaim = (token: string, claim: Claim): SetRemoveAppModalClaimAction => ({
  token,
  claim,
  type: SET_REMOVE_APP_MODAL_CLAIM,
})

export default setRemoveAppModalClaim
