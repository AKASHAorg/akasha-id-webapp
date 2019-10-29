import { Action } from 'redux'

import { SIGN_IN } from '../../consts/actions/landing'
import { Account } from '../../types/users'

export interface SignInAction extends Action<string> {
  account: Account
}

const signIn = (account: Account): SignInAction => ({
  account,
  type: SIGN_IN,
})

export default signIn
