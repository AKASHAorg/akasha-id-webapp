import { Action } from 'redux'

import { UPDATE_PROFILE } from '../../consts/actions/profile'
import { ProfileFormData } from '../../types/users'

export interface UpdateProfileAction extends Action<string>, ProfileFormData {}

const updateProfile = (profileFormData: ProfileFormData): UpdateProfileAction => ({
  ...profileFormData,
  type: UPDATE_PROFILE,
})

export default updateProfile
