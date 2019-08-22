import { Action } from 'redux'
import { UPDATE_PROFILE } from '../consts/actions'

export interface UpdateProfileAction extends Action<string> {
  login: string
  firstName: string
  lastName: string
  password: string
}

const updateProfile = (
  login: string,
  firstName: string,
  lastName: string,
  password: string,
): UpdateProfileAction => ({
  login,
  firstName,
  lastName,
  password,
  type: UPDATE_PROFILE,
})

export default updateProfile
