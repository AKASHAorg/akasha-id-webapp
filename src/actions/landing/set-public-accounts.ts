import { Action } from 'redux'

import { SET_PUBLIC_ACCOUNTS } from '../../consts/actions/landing'
import { Account } from '../../types/users'

export interface SetPublicAccountsAction extends Action<string> {
  users: Account[]
}

const setPublicAccounts = (users: Account[]): SetPublicAccountsAction => ({
  users,
  type: SET_PUBLIC_ACCOUNTS,
})

export default setPublicAccounts
