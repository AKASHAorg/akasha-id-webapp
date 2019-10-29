import { Profile } from '../types/users'

export interface ProfilesState {
  profiles: Profile[]
}

const defaultProfilesState: ProfilesState = {
  profiles: [],
}

export { defaultProfilesState }
