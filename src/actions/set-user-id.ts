import { Action } from 'redux'

import { SET_USER_ID } from '../consts/actions'

export interface SetUserIdAction extends Action<string> {
  userId: string
}

const setUserId = (userId: string): SetUserIdAction => ({
  userId,
  type: SET_USER_ID,
})

export default setUserId
