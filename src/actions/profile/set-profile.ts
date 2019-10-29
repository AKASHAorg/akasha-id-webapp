import { Action } from 'redux'

import { SET_PROFILE } from '../../consts/actions/profile'
import { Profile } from '../../types/users'

export interface SetProfileAction extends Action<string> {
  profile?: Profile
}

const setProfile = (profile?: Profile): SetProfileAction => ({
  profile,
  type: SET_PROFILE,
})

export default setProfile
