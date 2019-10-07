import { Action } from 'redux'

import { START_UPDATE_ACCOUNT } from '../../consts/actions/account'
import { AccountFormData } from '../../types/account'

export interface StartUpdateAccountAction extends Action<string>, AccountFormData {}

const startUpdateAccount = (accountFormData: AccountFormData): StartUpdateAccountAction => ({
  ...accountFormData,
  type: START_UPDATE_ACCOUNT,
})

export default startUpdateAccount
