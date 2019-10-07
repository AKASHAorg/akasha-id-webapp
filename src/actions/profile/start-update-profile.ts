import { Action } from 'redux'

import { START_UPDATE_PROFILE } from '../../consts/actions/profile'
import { ProfileData } from '../../types/users'

export interface StartUpdateProfileAction extends Action<string> {
  profileData: ProfileData
}

const startUpdateProfile = (profileData: ProfileData): StartUpdateProfileAction => ({
  profileData,
  type: START_UPDATE_PROFILE,
})

export default startUpdateProfile
