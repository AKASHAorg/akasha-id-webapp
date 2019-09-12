import { Action } from 'redux'

import { START_UPDATE_PASSWORD } from '../../consts/actions/profile'
import { PasswordFormData } from '../../types/users'

export interface StartUpdatePasswordAction extends Action<string> {
  passwordFormData: PasswordFormData
}

const startUpdatePassword = (passwordFormData: PasswordFormData): StartUpdatePasswordAction => ({
  passwordFormData,
  type: START_UPDATE_PASSWORD,
})

export default startUpdatePassword
