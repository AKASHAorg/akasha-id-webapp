import { Action } from 'redux'

import { START_SIGN_IN } from '../../consts/actions/landing'
import { SignInFormData } from '../../types/users'

export interface StartSignInAction extends Action<string> {
  userId: string
  formData: SignInFormData
}

const startSignIn = (userId: string, formData: SignInFormData): StartSignInAction => ({
  userId,
  formData,
  type: START_SIGN_IN,
})

export default startSignIn
