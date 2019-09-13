import { Action } from 'redux'

import { SET_REGISTER_APP_DATA } from '../../consts/actions/apps'

export interface SetRemoveAppModalClaimAction extends Action<string> {
  registerAppData: string
}

const setRemoveAppModalClaim = (registerAppData: string): SetRemoveAppModalClaimAction => ({
  registerAppData,
  type: SET_REGISTER_APP_DATA,
})

export default setRemoveAppModalClaim
