import { Action } from 'redux'
import { SIGN_IN } from '../consts/actions'

export interface SignInAction extends Action<string> {}

const signIn = (): SignInAction => ({
  type: SIGN_IN,
})

export default signIn
