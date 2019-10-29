import { Action } from 'redux'

import { FETCH_PUBLIC_ACCOUNTS } from '../../consts/actions/landing'

export interface FetchPublicAccountsAction extends Action<string> {}

const fetchPublicAccounts = (): FetchPublicAccountsAction => ({
  type: FETCH_PUBLIC_ACCOUNTS,
})

export default fetchPublicAccounts
