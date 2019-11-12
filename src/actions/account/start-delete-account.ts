import { Action } from 'redux'

import { START_DELETE_ACCOUNT } from '../../consts/actions/account'

export interface StartDeleteAccountAction extends Action<string> {}

const startDeleteAccount = (): StartDeleteAccountAction => ({
  type: START_DELETE_ACCOUNT,
})

export default startDeleteAccount
