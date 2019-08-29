import { Action } from 'redux'
import { CHANGE_PASSWORD } from '../consts/actions'

export interface ChangePasswordAction extends Action<string> {
  password: string
}

const changePassword = (password: string): ChangePasswordAction => ({
  password,
  type: CHANGE_PASSWORD,
})

export default changePassword
