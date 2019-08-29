import { Action } from 'redux'
import { CHANGE_SHARE_LAST_NAME } from '../consts/actions'

export interface ChangeShareLastNameAction extends Action<string> {
  value: boolean
}

const changeShareLastName = (value: boolean): ChangeShareLastNameAction => ({
  value,
  type: CHANGE_SHARE_LAST_NAME,
})

export default changeShareLastName
