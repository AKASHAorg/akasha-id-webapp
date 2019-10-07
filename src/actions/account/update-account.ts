import { Action } from 'redux'

import { UPDATE_ACCOUNT } from '../../consts/actions/account'
import { AccountFormData } from '../../types/account'

export interface UpdateAccountAction extends Action<string>, AccountFormData {}

const updateAccount = (accountFormData: AccountFormData): UpdateAccountAction => ({
  ...accountFormData,
  type: UPDATE_ACCOUNT,
})

export default updateAccount
