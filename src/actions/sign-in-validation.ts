import { Action } from 'redux'
import { SIGN_IN_VALIDATION } from '../consts/actions'

export interface SignInValidationAction extends Action<string> {}

const signInValidation = (): SignInValidationAction => ({
  type: SIGN_IN_VALIDATION,
})

export default signInValidation
