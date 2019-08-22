import { Action } from 'redux'
import { LOG_IN } from '../consts/actions'

export interface LogInAction extends Action<string> {}

const logIn = (): LogInAction => ({
  type: LOG_IN,
})

export default logIn
