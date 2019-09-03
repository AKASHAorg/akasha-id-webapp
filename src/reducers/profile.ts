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
  if (!action.valid) {
    return state
  }

  return {
    ...state,
    userId: action.userId!,
    username: fullState.landing.username,
    password: fullState.landing.password,
    signedIn: true,
  }
}

const signIn = (state: ProfileState, action: SignInAction, fullState: State): ProfileState => {
  if (!action.valid) {
    return state
  }

  return {
    ...state,
    userId: fullState.landing.userId,
    username: fullState.landing.username,
    password: fullState.landing!.password,
    signedIn: true,
  }
}

const signOut = (state: ProfileState, action: SignOutAction, fullState: State): ProfileState => {
  return {
    ...state,
    userId: '',
    username: '',
    password: '',
    signedIn: false,
  }
}

const updateProfile = (
  state: ProfileState,
  action: UpdateProfileAction,
  fullState: State,
): ProfileState => {
  let usernameError = ''
  let passwordError = ''
  let error = false

  if (action.username === '') {
    usernameError = 'Username cannot be empty'
    error = true
  }

  if (action.password === '') {
    passwordError = 'Password cannot be empty'
    error = true
  }

  if (error) {
    return {
      ...state,
      usernameError,
      passwordError,
      profileFormValid: false,
    }
  }

  return {
    ...state,
    username: action.username,
    password: action.password,
    usernameError: '',
    passwordError: '',
    profileFormValid: true,
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
