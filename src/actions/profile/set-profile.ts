import { Action } from 'redux'

import { SET_PROFILE } from '../../consts/actions/profile'
import { ProfileData } from '../../types/users'

export interface SetProfileAction extends Action<string> {
  profileData?: ProfileData
}

const setProfile = (profileData?: ProfileData): SetProfileAction => ({
  profileData,
  type: SET_PROFILE,
})

export default setProfile
