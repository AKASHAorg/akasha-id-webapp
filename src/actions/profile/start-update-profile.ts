import { Action } from 'redux'

import { START_UPDATE_PROFILE } from '../../consts/actions/profile'
import { ProfileFormData } from '../../types/users'

export interface StartUpdateProfileAction extends Action<string> {
  profileFormData: ProfileFormData
}

const startUpdateProfile = (profileFormData: ProfileFormData): StartUpdateProfileAction => ({
  profileFormData,
  type: START_UPDATE_PROFILE,
})

export default startUpdateProfile
