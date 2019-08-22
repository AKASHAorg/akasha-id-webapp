import { Action } from 'redux'
import { CHANGE_LOGIN } from '../consts/actions'

export interface ChangeLoginAction extends Action<string> {
  login: string
}

const changeLogin = (login: string): ChangeLoginAction => ({
  login,
  type: CHANGE_LOGIN,
})

export default changeLogin
