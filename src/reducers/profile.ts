import { Action } from 'redux'

import { LogInAction } from '../actions/log-in'
import { SignUpAction } from '../actions/sign-up'
import * as actions from '../consts/actions'
import { State } from '../states'
import { defaultProfileState, ProfileState } from '../states/profile'

const logIn = (state: ProfileState, action: LogInAction, fullState: State): ProfileState => {
  const user = fullState.landing.users.find(u => u.login === fullState.landing.login)

  if (user) {
    return {
      ...state,
      login: fullState.landing.login,
      firstName: user.firstName,
      lastName: user.lastName,
      password: fullState.landing.password,
    }
  }

  return state
}

const signUp = (state: ProfileState, action: SignUpAction, fullState: State): ProfileState => {
  return state
}

const reducer = (
  state: ProfileState = defaultProfileState,
  action: Action<string>,
  fullState: State,
): ProfileState => {
  switch (action.type) {
    case actions.LOG_IN:
      return logIn(state, action as LogInAction, fullState)

    case actions.SIGN_UP:
      return signUp(state, action as SignUpAction, fullState)

    default:
      return state
  }
}

export default reducer
