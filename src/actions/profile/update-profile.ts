import { Action } from 'redux'

import { UPDATE_PROFILE } from '../../consts/actions/profile'
import { ProfileData } from '../../types/users'

export interface UpdateProfileAction extends Action<string>, ProfileData {}

const updateProfile = (profileData: ProfileData): UpdateProfileAction => ({
  ...profileData,
  type: UPDATE_PROFILE,
})

export default updateProfile
