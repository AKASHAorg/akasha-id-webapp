import { Action } from 'redux'

import { START_CREATE_PROFILE } from '../../consts/actions/profile'
import { ProfileData } from '../../types/users'

export interface StartCreateProfileAction extends Action<string> {
  profileData: ProfileData
}

const startCreateProfile = (profileData: ProfileData): StartCreateProfileAction => ({
  profileData,
  type: START_CREATE_PROFILE,
})

export default startCreateProfile
