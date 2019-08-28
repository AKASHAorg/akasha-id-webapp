import { Action } from 'redux'

import { LoadProfileAction } from '../actions/load-profile'
import { RequestProfileAction } from '../actions/request-profile'
import { SignUpAction } from '../actions/sign-up'
import { UpdateProfileAction } from '../actions/update-profile'
import * as actions from '../consts/actions'
import { State } from '../states'
import { defaultProfileState, ProfileState } from '../states/profile'

const signUp = (state: ProfileState, action: SignUpAction, fullState: State): ProfileState => {
  return {
    ...state,
    login: fullState.landing.login,
  }
}

const requestProfile = (
  state: ProfileState,
  action: RequestProfileAction,
  fullState: State,
): ProfileState => {
  return {
    ...state,
    profileData: action.data,
  }
}

const loadProfile = (
  state: ProfileState,
  action: LoadProfileAction,
  fullState: State,
): ProfileState => {
  return {
    ...state,
    firstName: action.firstName,
    lastName: action.lastName,
    password: action.password,
  }
}

const updateProfile = (
  state: ProfileState,
  action: UpdateProfileAction,
  fullState: State,
): ProfileState => {
  return {
    ...state,
    login: action.login,
    firstName: action.firstName,
    lastName: action.lastName,
    password: action.password,
  }
}

const reducer = (
  state: ProfileState = defaultProfileState,
  action: Action<string>,
  fullState: State,
): ProfileState => {
  switch (action.type) {
    case actions.SIGN_UP:
      return signUp(state, action as SignUpAction, fullState)

    case actions.REQUEST_PROFILE:
      return requestProfile(state, action as RequestProfileAction, fullState)

    case actions.LOAD_PROFILE:
      return loadProfile(state, action as LoadProfileAction, fullState)

    case actions.UPDATE_PROFILE:
      return updateProfile(state, action as UpdateProfileAction, fullState)

    default:
      return state
  }
}

export default reducer
