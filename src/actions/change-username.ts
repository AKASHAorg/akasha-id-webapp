import { Action } from 'redux'
import { CHANGE_USERNAME } from '../consts/actions'

export interface ChangeUsernameAction extends Action<string> {
  username: string
}

const changeUsername = (username: string): ChangeUsernameAction => ({
  username,
  type: CHANGE_USERNAME,
})

export default changeUsername
