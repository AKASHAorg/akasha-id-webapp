import { Action } from 'redux'
import { SIGN_UP } from '../consts/actions'

export interface SignUpAction extends Action<string> {}

const signUp = (): SignUpAction => ({
  type: SIGN_UP,
})

export default signUp
