import { Action } from 'redux'

import { ChangePasswordAction } from '../actions/change-password'
import { ChangeUsernameAction } from '../actions/change-username'
import { DeleteProfileAction } from '../actions/delete-profile'
import { HideSignInModalAction } from '../actions/hide-sign-in-modal'
import { HideSignUpModalAction } from '../actions/hide-sign-up-modal'
import { ShowSignInModalAction } from '../actions/show-sign-in-modal'
import { ShowSignUpModalAction } from '../actions/show-sign-up-modal'
import { SignInAction } from '../actions/sign-in'
import { SignUpAction } from '../actions/sign-up'
import { UpdateProfileAction } from '../actions/update-profile'
import * as actions from '../consts/actions'
import { State } from '../states'
import { defaultLandingState, LandingState } from '../states/landing'

const changeUsername = (
  state: LandingState,
  action: ChangeUsernameAction,
  fullState: State,
): LandingState => {
  return {
    ...state,
    username: action.username,
    usernameError: '',
  }
}

const changePassword = (
  state: LandingState,
  action: ChangePasswordAction,
  fullState: State,
): LandingState => {
  return {
    ...state,
    password: action.password,
    passwordError: '',
  }
}

const showSignUpModal = (
  state: LandingState,
  action: ShowSignUpModalAction,
  fullState: State,
): LandingState => {
  return {
    ...state,
    showSignUpModal: true,
    username: '',
    password: '',
    usernameError: '',
    passwordError: '',
  }
}

const hideSignUpModal = (
  state: LandingState,
  action: HideSignUpModalAction,
  fullState: State,
): LandingState => {
  return {
    ...state,
    showSignUpModal: false,
  }
}

const signUp = (state: LandingState, action: SignUpAction, fullState: State): LandingState => {
  let error = false
  let usernameError = ''
  let passwordError = ''

  if (!state.username) {
    error = true
    usernameError = 'Username cannot be empty'
  }

  if (state.users.find(user => user.username === state.username)) {
    error = true
    usernameError = 'User is already registered'
  }

  if (!state.password) {
    error = true
    passwordError = 'Password cannot be empty'
  }

  if (error) {
    return {
      ...state,
      usernameError,
      passwordError,
    }
  }

  return {
    ...state,
    showSignUpModal: false,
    users: [
      ...state.users,
      {
        username: state.username,
        firstName: '',
        lastName: '',
        password: state.password,
      },
    ],
  }
}

const showSignInModal = (
  state: LandingState,
  action: ShowSignInModalAction,
  fullState: State,
): LandingState => {
  return {
    ...state,
    showSignInModal: true,
    username: action.username,
    password: '',
    passwordError: '',
  }
}

const hideSignInModal = (
  state: LandingState,
  action: HideSignInModalAction,
  fullState: State,
): LandingState => {
  return {
    ...state,
    showSignInModal: false,
  }
}

const signIn = (state: LandingState, action: SignInAction, fullState: State): LandingState => {
  let error = false
  let passwordError = ''
  const user = state.users.find(u => u.username === state.username)

  if (!user) {
    error = true
  }

  if (user!.password !== state.password) {
    error = true
    passwordError = 'Incorrect password'
  }

  if (error) {
    return {
      ...state,
      passwordError,
    }
  }

  return {
    ...state,
    showSignInModal: false,
  }
}

const updateProfile = (
  state: LandingState,
  action: UpdateProfileAction,
  fullState: State,
): LandingState => {
  if (action.password === '') {
    return state
  }

  return {
    ...state,
    users: state.users.map(user => {
      if (user.username !== fullState.profile.username) {
        return user
      }

      return {
        username: fullState.profile.username,
        firstName: action.firstName,
        lastName: action.lastName,
        password: action.password,
      }
    }),
  }
}

const deleteProfile = (
  state: LandingState,
  action: DeleteProfileAction,
  fullState: State,
): LandingState => {
  return {
    ...state,
    users: state.users.filter(user => user.username !== fullState.profile.username),
  }
}

const reducer = (
  state: LandingState = defaultLandingState,
  action: Action<string>,
  fullState: State,
): LandingState => {
  switch (action.type) {
    case actions.CHANGE_USERNAME:
      return changeUsername(state, action as ChangeUsernameAction, fullState)

    case actions.CHANGE_PASSWORD:
      return changePassword(state, action as ChangePasswordAction, fullState)

    case actions.SHOW_SIGN_UP_MODAL:
      return showSignUpModal(state, action as ShowSignUpModalAction, fullState)

    case actions.HIDE_SIGN_UP_MODAL:
      return hideSignUpModal(state, action as HideSignUpModalAction, fullState)

    case actions.SIGN_UP:
      return signUp(state, action as SignUpAction, fullState)

    case actions.SHOW_SIGN_IN_MODAL:
      return showSignInModal(state, action as ShowSignInModalAction, fullState)

    case actions.HIDE_SIGN_IN_MODAL:
      return hideSignInModal(state, action as HideSignInModalAction, fullState)

    case actions.SIGN_IN:
      return signIn(state, action as SignInAction, fullState)

    case actions.UPDATE_PROFILE:
      return updateProfile(state, action as UpdateProfileAction, fullState)

    case actions.DELETE_PROFILE:
      return deleteProfile(state, action as DeleteProfileAction, fullState)

    default:
      return state
  }
}

export default reducer
