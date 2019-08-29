import { Action } from 'redux'
import { CHANGE_SHARE_FIRST_NAME } from '../consts/actions'

export interface ChangeShareFirstNameAction extends Action<string> {
  value: boolean
}

const changeShareFirstName = (value: boolean): ChangeShareFirstNameAction => ({
  value,
  type: CHANGE_SHARE_FIRST_NAME,
})

export default changeShareFirstName
