import { Action } from 'redux'

import { ChangeLoginAction } from '../actions/change-login'
import { DeleteProfileAction } from '../actions/delete-profile'
import { HideSignUpModalAction } from '../actions/hide-sign-up-modal'
import { LogOutAction } from '../actions/log-out'
import { RequestProfileAction } from '../actions/request-profile'
import { SetSignUpLinkAction } from '../actions/set-sign-up-link'
import { ShowSignUpModalAction } from '../actions/show-sign-up-modal'
import { SignUpAction } from '../actions/sign-up'
import * as actions from '../consts/actions'
import { State } from '../states'
import { defaultLandingState, LandingState } from '../states/landing'

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

const requestProfile = (
  state: LandingState,
  action: RequestProfileAction,
  fullState: State,
): LandingState => {
  return {
    ...state,
    showSignUpModal: false,
    loggedIn: true,
  }
}

const reducer = (
  state: LandingState = defaultLandingState,
  action: Action<string>,
  fullState: State,
): LandingState => {
  switch (action.type) {
    case actions.CHANGE_LOGIN:
      return changeLogin(state, action as ChangeLoginAction, fullState)

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

    case actions.REQUEST_PROFILE:
      return requestProfile(state, action as RequestProfileAction, fullState)

    default:
      return state
  }
}

export default reducer
