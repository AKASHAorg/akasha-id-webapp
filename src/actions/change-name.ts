import { Action } from 'redux'
import { CHANGE_NAME } from '../consts/actions'

export interface ChangeNameAction extends Action<string> {
  name: string
}

const changeUsername = (name: string): ChangeNameAction => ({
  name,
  type: CHANGE_NAME,
})

export default changeUsername
