import { Action } from 'redux'

import { DeleteProfileAction } from '../actions/delete-profile'
import { SignInAction } from '../actions/sign-in'
import { SignOutAction } from '../actions/sign-out'
import { SignUpAction } from '../actions/sign-up'
import { UpdateProfileAction } from '../actions/update-profile'
import * as actions from '../consts/actions'
import { State } from '../states'
import { defaultProfileState, ProfileState } from '../states/profile'

const signUp = (state: ProfileState, action: SignUpAction, fullState: State): ProfileState => {
  const error =
    !fullState.landing.username ||
    !fullState.landing.password ||
    fullState.landing.users.find(user => user.username === fullState.landing.username)

  if (error) {
    return state
  }

  return {
    ...state,
    username: fullState.landing.username,
    password: fullState.landing.password,
    firstName: '',
    lastName: '',
    signedIn: true,
  }
}

const signIn = (state: ProfileState, action: SignInAction, fullState: State): ProfileState => {
  const user = fullState.landing.users.find(u => u.username === state.username)
  const error = !user || user!.password !== fullState.landing.password

  if (error) {
    return state
  }

  return {
    ...state,
    username: fullState.landing.username,
    password: user!.password,
    firstName: user!.firstName,
    lastName: user!.lastName,
    signedIn: true,
  }
}

const signOut = (state: ProfileState, action: SignOutAction, fullState: State): ProfileState => {
  return {
    ...state,
    signedIn: false,
  }
}

const updateProfile = (
  state: ProfileState,
  action: UpdateProfileAction,
  fullState: State,
): ProfileState => {
  if (action.password === '') {
    return {
      ...state,
      passwordError: 'Password cannot be empty',
    }
  }

  return {
    ...state,
    firstName: action.firstName,
    lastName: action.lastName,
    password: action.password,
  }
}

const deleteProfile = (
  state: ProfileState,
  action: DeleteProfileAction,
  fullState: State,
): ProfileState => {
  return {
    ...state,
    signedIn: false,
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

    case actions.SIGN_IN:
      return signIn(state, action as SignInAction, fullState)

    case actions.SIGN_OUT:
      return signOut(state, action as SignOutAction, fullState)

    case actions.UPDATE_PROFILE:
      return updateProfile(state, action as UpdateProfileAction, fullState)

    case actions.DELETE_PROFILE:
      return deleteProfile(state, action as DeleteProfileAction, fullState)

    default:
      return state
  }
}

export default reducer
