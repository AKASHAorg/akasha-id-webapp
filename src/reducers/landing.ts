import { Action } from 'redux'

import { DeleteAccountAction } from '../actions/account/delete-account'
import { UpdateAccountAction } from '../actions/account/update-account'
import { SetPublicAccountsAction } from '../actions/landing/set-public-accounts'
import { SetRegisterAppLinkAction } from '../actions/landing/set-register-app-link'
import { SignUpAction } from '../actions/landing/sign-up'
import * as actions from '../consts/actions'
import { State } from '../states'
import { defaultLandingState, LandingState } from '../states/landing'

const setPublicAccounts = (
  state: LandingState,
  action: SetPublicAccountsAction,
  fullState: State,
): LandingState => {
  return {
    ...state,
    users: [...action.users],
  }
}

const signUp = (state: LandingState, action: SignUpAction, fullState: State): LandingState => {
  return {
    ...state,
    users: [...state.users, { ...action.account }],
  }
}

const deleteProfile = (
  state: LandingState,
  action: DeleteAccountAction,
  fullState: State,
): LandingState => {
  return {
    ...state,
    users: state.users.filter(user => user.id !== fullState.account.userId),
  }
}

const updateAccount = (
  state: LandingState,
  action: UpdateAccountAction,
  fullState: State,
): LandingState => {
  return {
    ...state,
    users: state.users.map(user =>
      user.id === fullState.account.userId
        ? {
            ...user,
            name: action.name,
          }
        : user,
    ),
  }
}

const setRegisterAppLink = (
  state: LandingState,
  action: SetRegisterAppLinkAction,
  fullState: State,
): LandingState => {
  return {
    ...state,
    registerAppLink: action.link,
  }
}

const reducer = (
  state: LandingState = defaultLandingState,
  action: Action<string>,
  fullState: State,
): LandingState => {
  switch (action.type) {
    case actions.landing.SET_PUBLIC_ACCOUNTS:
      return setPublicAccounts(state, action as SetPublicAccountsAction, fullState)

    case actions.landing.SIGN_UP:
      return signUp(state, action as SignUpAction, fullState)

    case actions.account.UPDATE_ACCOUNT:
      return updateAccount(state, action as UpdateAccountAction, fullState)

    case actions.account.DELETE_ACCOUNT:
      return deleteProfile(state, action as DeleteAccountAction, fullState)

    case actions.landing.SET_REGISTER_APP_LINK:
      return setRegisterAppLink(state, action as SetRegisterAppLinkAction, fullState)

    default:
      return state
  }
}

export default reducer
