import { Action } from 'redux'

import { SIGN_UP } from '../../consts/actions/landing'
import { Account } from '../../types/users'

export interface SignUpAction extends Action<string> {
  account: Account
}

const signUp = (account: Account): SignUpAction => ({
  account,
  type: SIGN_UP,
})

export default signUp
