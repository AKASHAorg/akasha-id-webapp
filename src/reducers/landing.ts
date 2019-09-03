import { Action } from 'redux'

import { ChangeNameAction } from '../actions/change-name'
import { ChangePasswordAction } from '../actions/change-password'
import { DeleteProfileAction } from '../actions/delete-profile'
import { HideSignInModalAction } from '../actions/hide-sign-in-modal'
import { HideSignUpModalAction } from '../actions/hide-sign-up-modal'
import { LoadUsersAction } from '../actions/load-users'
import { ShowSignInModalAction } from '../actions/show-sign-in-modal'
import { ShowSignUpModalAction } from '../actions/show-sign-up-modal'
import { SignInAction } from '../actions/sign-in'
import { SignInValidationAction } from '../actions/sign-in-validation'
import { SignUpAction } from '../actions/sign-up'
import { SignUpValidationAction } from '../actions/sign-up-validation'
import * as actions from '../consts/actions'
import { State } from '../states'
import { defaultLandingState, LandingState } from '../states/landing'

const loadUsers = (
  state: LandingState,
  action: LoadUsersAction,
  fullState: State,
): LandingState => {
  return {
    ...state,
    users: [...action.users],
  }
}

const changename = (
  state: LandingState,
  action: ChangeNameAction,
  fullState: State,
): LandingState => {
  return {
    ...state,
    name: action.name,
    nameError: '',
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
    name: '',
    password: '',
    nameError: '',
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

const signUpValidation = (
  state: LandingState,
  action: SignUpValidationAction,
  fullState: State,
): LandingState => {
  let error = false
  let nameError = ''
  let passwordError = ''

  if (!state.name) {
    error = true
    nameError = 'name cannot be empty'
  }

  if (!state.password) {
    error = true
    passwordError = 'Password cannot be empty'
  }

  if (error) {
    return {
      ...state,
      nameError,
      passwordError,
      profileFormValid: false,
    }
  }

  return {
    ...state,
    profileFormValid: true,
  }
}

const signUp = (state: LandingState, action: SignUpAction, fullState: State): LandingState => {
  if (action.valid) {
    return {
      ...state,
      showSignUpModal: false,
    }
  }

  return {
    ...state,
    nameError: 'name already exists',
  }
}

const showSignInModal = (
  state: LandingState,
  action: ShowSignInModalAction,
  fullState: State,
): LandingState => {
  const user = state.users.find(u => u.id === action.userId)
  return {
    ...state,
    showSignInModal: true,
    userId: action.userId,
    name: user ? user.name : '',
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

const signInValidation = (
  state: LandingState,
  action: SignInValidationAction,
  fullState: State,
): LandingState => {
  let error = false
  let passwordError = ''

  if (!state.password) {
    error = true
    passwordError = 'Password cannot be empty'
  }

  if (error) {
    return {
      ...state,
      passwordError,
      profileFormValid: false,
    }
  }

  return {
    ...state,
    profileFormValid: true,
  }
}

const signIn = (state: LandingState, action: SignInAction, fullState: State): LandingState => {
  if (action.valid) {
    return {
      ...state,
      showSignInModal: false,
    }
  }

  return {
    ...state,
    passwordError: 'Incorrect password',
  }
}

const deleteProfile = (
  state: LandingState,
  action: DeleteProfileAction,
  fullState: State,
): LandingState => {
  return {
    ...state,
    users: state.users.filter(user => user.name !== fullState.profile.name),
  }
}

const reducer = (
  state: LandingState = defaultLandingState,
  action: Action<string>,
  fullState: State,
): LandingState => {
  switch (action.type) {
    case actions.LOAD_USERS:
      return loadUsers(state, action as LoadUsersAction, fullState)

    case actions.CHANGE_NAME:
      return changename(state, action as ChangeNameAction, fullState)

    case actions.CHANGE_PASSWORD:
      return changePassword(state, action as ChangePasswordAction, fullState)

    case actions.SHOW_SIGN_UP_MODAL:
      return showSignUpModal(state, action as ShowSignUpModalAction, fullState)

    case actions.HIDE_SIGN_UP_MODAL:
      return hideSignUpModal(state, action as HideSignUpModalAction, fullState)

    case actions.SIGN_UP_VALIDATION:
      return signUpValidation(state, action as SignUpValidationAction, fullState)

    case actions.SIGN_UP:
      return signUp(state, action as SignUpAction, fullState)

    case actions.SHOW_SIGN_IN_MODAL:
      return showSignInModal(state, action as ShowSignInModalAction, fullState)

    case actions.HIDE_SIGN_IN_MODAL:
      return hideSignInModal(state, action as HideSignInModalAction, fullState)

    case actions.SIGN_IN_VALIDATION:
      return signInValidation(state, action as SignInValidationAction, fullState)

    case actions.SIGN_IN:
      return signIn(state, action as SignInAction, fullState)

    case actions.DELETE_PROFILE:
      return deleteProfile(state, action as DeleteProfileAction, fullState)

    default:
      return state
  }
}

export default reducer
