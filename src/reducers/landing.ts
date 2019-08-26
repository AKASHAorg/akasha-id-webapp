import { Action } from 'redux'

import { ChangeLoginAction } from '../actions/change-login'
import { ChangePasswordAction } from '../actions/change-password'
import { DeleteProfileAction } from '../actions/delete-profile'
import { HideLogInModalAction } from '../actions/hide-log-in-modal'
import { HideSignUpModalAction } from '../actions/hide-sign-up-modal'
import { LogInAction } from '../actions/log-in'
import { LogOutAction } from '../actions/log-out'
import { RefreshProfileAction } from '../actions/refresh-profile'
import { SetSignUpLinkAction } from '../actions/set-sign-up-link'
import { ShowLogInModalAction } from '../actions/show-log-in-modal'
import { ShowSignUpModalAction } from '../actions/show-sign-up-modal'
import { SignUpAction } from '../actions/sign-up'
import * as actions from '../consts/actions'
import { State } from '../states'
import { defaultLandingState, LandingState } from '../states/landing'

const showLogInModal = (
  state: LandingState,
  action: ShowLogInModalAction,
  fullState: State,
): LandingState => {
  return {
    ...state,
    login: action.login,
    showLogInModal: true,
    logInModalErrorMessage: '',
    password: '',
  }
}

const hideLogInModal = (
  state: LandingState,
  action: HideLogInModalAction,
  fullState: State,
): LandingState => {
  return {
    ...state,
    showLogInModal: false,
  }
}

const changeLogin = (
  state: LandingState,
  action: ChangeLoginAction,
  fullState: State,
): LandingState => {
  return {
    ...state,
    login: action.login,
    logInModalErrorMessage: '',
    signUpModalErrorMessage: '',
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
    logInModalErrorMessage: '',
    signUpModalErrorMessage: '',
  }
}

const logIn = (state: LandingState, action: LogInAction, fullState: State): LandingState => {
  const user = state.users.find(u => u.login === state.login)

  if (!user) {
    return {
      ...state,
      logInModalErrorMessage: 'User not found',
    }
  }

  if (state.password === '') {
    return {
      ...state,
      logInModalErrorMessage: 'Password cannot be empty',
    }
  }

  if (user.password !== state.password) {
    return {
      ...state,
      logInModalErrorMessage: 'Incorrect password',
    }
  }

  return {
    ...state,
    loggedIn: true,
    showLogInModal: false,
  }
}

const showSignUpModal = (
  state: LandingState,
  action: ShowSignUpModalAction,
  fullState: State,
): LandingState => {
  return {
    ...state,
    signUpStep: 'get-link',
    showSignUpModal: true,
    signUpModalErrorMessage: '',
    login: '',
    password: '',
    signUpLink: null,
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
  return {
    ...state,
    signUpStep: 'send-claim',
  }
}

const logOut = (state: LandingState, action: LogOutAction, fullState: State): LandingState => {
  return {
    ...state,
    loggedIn: false,
  }
}

const deleteProfile = (
  state: LandingState,
  action: DeleteProfileAction,
  fullState: State,
): LandingState => {
  return {
    ...state,
    loggedIn: false,
    users: state.users.filter(user => user.login !== state.login),
  }
}

const setSignUpLink = (
  state: LandingState,
  action: SetSignUpLinkAction,
  fullState: State,
): LandingState => {
  return {
    ...state,
    signUpStep: 'enter-login',
    signUpLink: action.link,
  }
}

const refreshProfile = (
  state: LandingState,
  action: RefreshProfileAction,
  fullState: State,
): LandingState => {
  return {
    ...state,
    signUpStep: 'refresh-profile',
    signUpData: action.data,
  }
}

const reducer = (
  state: LandingState = defaultLandingState,
  action: Action<string>,
  fullState: State,
): LandingState => {
  switch (action.type) {
    case actions.SHOW_LOG_IN_MODAL:
      return showLogInModal(state, action as ShowLogInModalAction, fullState)

    case actions.HIDE_LOG_IN_MODAL:
      return hideLogInModal(state, action as HideLogInModalAction, fullState)

    case actions.CHANGE_LOGIN:
      return changeLogin(state, action as ChangeLoginAction, fullState)

    case actions.CHANGE_PASSWORD:
      return changePassword(state, action as ChangePasswordAction, fullState)

    case actions.LOG_IN:
      return logIn(state, action as LogInAction, fullState)

    case actions.SHOW_SIGN_UP_MODAL:
      return showSignUpModal(state, action as ShowSignUpModalAction, fullState)

    case actions.HIDE_SIGN_UP_MODAL:
      return hideSignUpModal(state, action as HideSignUpModalAction, fullState)

    case actions.SIGN_UP:
      return signUp(state, action as SignUpAction, fullState)

    case actions.LOG_OUT:
      return logOut(state, action as LogOutAction, fullState)

    case actions.DELETE_PROFILE:
      return deleteProfile(state, action as DeleteProfileAction, fullState)

    case actions.SET_SIGN_UP_LINK:
      return setSignUpLink(state, action as SetSignUpLinkAction, fullState)

    case actions.REFRESH_PROFILE:
      return refreshProfile(state, action as RefreshProfileAction, fullState)

    default:
      return state
  }
}

export default reducer
