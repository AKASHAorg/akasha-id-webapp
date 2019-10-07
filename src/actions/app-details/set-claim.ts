import { Action } from 'redux'

import { SET_CLAIM } from '../../consts/actions/app-details'
import { App, Claim } from '../../types/apps'

export interface SetClaimAction extends Action<string> {
  app?: App
  claim?: Claim
}

const setClaim = (app?: App, claim?: Claim): SetClaimAction => ({
  app,
  claim,
  type: SET_CLAIM,
})

export default setClaim
