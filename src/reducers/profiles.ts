import { Action } from 'redux'

import { SetProfilesAction } from '../actions/profiles/set-profiles'
import * as actions from '../consts/actions'
import { State } from '../states'
import { defaultProfilesState, ProfilesState } from '../states/profiles'

const setProfiles = (
  state: ProfilesState,
  action: SetProfilesAction,
  fullState: State,
): ProfilesState => {
  return {
    ...state,
    profiles: [...action.profiles],
  }
}

const reducer = (
  state: ProfilesState = defaultProfilesState,
  action: Action<string>,
  fullState: State,
): ProfilesState => {
  switch (action.type) {
    case actions.profiles.SET_PROFILES:
      return setProfiles(state, action as SetProfilesAction, fullState)

    default:
      return state
  }
}

export default reducer
