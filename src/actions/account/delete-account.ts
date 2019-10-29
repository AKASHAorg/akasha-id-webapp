import { Action } from 'redux'

import { DELETE_ACCOUNT } from '../../consts/actions/account'

export interface DeleteAccountAction extends Action<string> {}

const deleteAccount = (): DeleteAccountAction => ({
  type: DELETE_ACCOUNT,
})

export default deleteAccount
