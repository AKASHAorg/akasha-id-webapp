import { Action } from 'redux'

import { START_SIGN_OUT } from '../../consts/actions/profile'

export interface StartSignOutAction extends Action<string> {}

const startSignOut = (): StartSignOutAction => ({
  type: START_SIGN_OUT,
})

export default startSignOut
