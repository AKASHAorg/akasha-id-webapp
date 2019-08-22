import { Action } from 'redux'
import { LOG_OUT } from '../consts/actions'

export interface LogOutAction extends Action<string> {}

const logOut = (): LogOutAction => ({
  type: LOG_OUT,
})

export default logOut
