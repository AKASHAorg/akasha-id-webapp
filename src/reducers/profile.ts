import { Action } from 'redux'

import { RequestProfileAction } from '../actions/request-profile'
import { SignUpAction } from '../actions/sign-up'
import * as actions from '../consts/actions'
import { State } from '../states'
import { defaultProfileState, ProfileState } from '../states/profile'

const signUp = (state: ProfileState, action: SignUpAction, fullState: State): ProfileState => {
  return {
    ...state,
    login: fullState.landing.login,
    firstName: '',
    lastName: '',
    password: '',
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

    default:
      return state
  }
}

export default reducer
