import { Action } from 'redux'
import { SIGN_OUT } from '../consts/actions'

export interface SignOutAction extends Action<string> {}

const signOut = (): SignOutAction => ({
  type: SIGN_OUT,
})

export default signOut
