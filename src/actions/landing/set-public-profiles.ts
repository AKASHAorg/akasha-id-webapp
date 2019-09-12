import { Action } from 'redux'

import { SET_PUBLIC_PROFILES } from '../../consts/actions/landing'
import { Profile } from '../../types/users'

export interface SetPublicProfilesAction extends Action<string> {
  users: Profile[]
}

const setPublicProfiles = (users: Profile[]): SetPublicProfilesAction => ({
  users,
  type: SET_PUBLIC_PROFILES,
})

export default setPublicProfiles
