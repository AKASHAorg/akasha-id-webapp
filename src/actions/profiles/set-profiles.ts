import { Action } from 'redux'

import { SET_PROFILES } from '../../consts/actions/profiles'
import { Profile } from '../../types/users'

export interface SetProfilesAction extends Action<string> {
  profiles: Profile[]
}

const setProfiles = (profiles: Profile[]): SetProfilesAction => ({
  profiles,
  type: SET_PROFILES,
})

export default setProfiles
