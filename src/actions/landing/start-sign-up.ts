import { Action } from 'redux'

import { START_SIGN_UP } from '../../consts/actions/landing'
import { SignUpFormData } from '../../types/users'

export interface StartSignUpAction extends Action<string> {
  formData: SignUpFormData
}

const startSignUp = (formData: SignUpFormData): StartSignUpAction => ({
  formData,
  type: START_SIGN_UP,
})

export default startSignUp
