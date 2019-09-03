import { Action } from 'redux'
import { SIGN_UP_VALIDATION } from '../consts/actions'

export interface SignUpValidationAction extends Action<string> {}

const signUpValidation = (): SignUpValidationAction => ({
  type: SIGN_UP_VALIDATION,
})

export default signUpValidation
