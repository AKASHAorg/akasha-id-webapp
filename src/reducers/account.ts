import { Action } from 'redux'

import { DeleteAccountAction } from '../actions/account/delete-account'
import { SignOutAction } from '../actions/account/sign-out'
import { UpdateAccountAction } from '../actions/account/update-account'
import { SignInAction } from '../actions/landing/sign-in'
import { SignUpAction } from '../actions/landing/sign-up'
import * as actions from '../consts/actions'
import { State } from '../states'
import { AccountState, defaultAccountState } from '../states/account'

const signUp = (state: AccountState, action: SignUpAction, fullState: State): AccountState => {
  return {
    ...state,
    userId: action.account.id,
    name: action.account.name,
    signedIn: true,
  }
}

const signIn = (state: AccountState, action: SignInAction, fullState: State): AccountState => {
  return {
    ...state,
    userId: action.account.id,
    name: action.account.name,
    signedIn: true,
  }
}

const signOut = (state: AccountState, action: SignOutAction, fullState: State): AccountState => {
  return {
    ...state,
    userId: '',
    name: '',
    signedIn: false,
  }
}

const updateAccount = (
  state: AccountState,
  action: UpdateAccountAction,
  fullState: State,
): AccountState => {
  return {
    ...state,
    name: action.name,
  }
}

const deleteAccount = (
  state: AccountState,
  action: DeleteAccountAction,
  fullState: State,
): AccountState => {
  return {
    ...state,
    userId: '',
    name: '',
    signedIn: false,
  }
}

const reducer = (
  state: AccountState = defaultAccountState,
  action: Action<string>,
  fullState: State,
): AccountState => {
  switch (action.type) {
    case actions.landing.SIGN_UP:
      return signUp(state, action as SignUpAction, fullState)

    case actions.landing.SIGN_IN:
      return signIn(state, action as SignInAction, fullState)

    case actions.account.SIGN_OUT:
      return signOut(state, action as SignOutAction, fullState)

    case actions.account.DELETE_ACCOUNT:
      return deleteAccount(state, action as DeleteAccountAction, fullState)

    case actions.account.UPDATE_ACCOUNT:
      return updateAccount(state, action as UpdateAccountAction, fullState)

    default:
      return state
  }
}

export default reducer
