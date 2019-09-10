import { Action } from 'redux'

import { DeleteProfileAction } from '../actions/delete-profile'
import { LoadUsersAction } from '../actions/load-users'
import { SetUserIdAction } from '../actions/set-user-id'
import { SignUpAction } from '../actions/sign-up'
import { UpdateProfileAction } from '../actions/update-profile'
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

const setUserId = (
  state: LandingState,
  action: SetUserIdAction,
  fullState: State,
): LandingState => {
  return {
    ...state,
    userId: action.userId,
  }
}

const signUp = (state: LandingState, action: SignUpAction, fullState: State): LandingState => {
  if (!action.valid) {
    return state
  }

  return {
    ...state,
    users: [...state.users, { ...action.profile! }],
  }
}

const deleteProfile = (
  state: LandingState,
  action: DeleteProfileAction,
  fullState: State,
): LandingState => {
  return {
    ...state,
    users: state.users.filter(user => user.id !== fullState.profile.userId),
  }
}

const updateProfile = (
  state: LandingState,
  action: UpdateProfileAction,
  fullState: State,
): LandingState => {
  return {
    ...state,
    users: state.users.map(user =>
      user.id === fullState.profile.userId
        ? {
            ...user,
            name: action.name,
          }
        : user,
    ),
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

    case actions.SET_USER_ID:
      return setUserId(state, action as SetUserIdAction, fullState)

    case actions.SIGN_UP:
      return signUp(state, action as SignUpAction, fullState)

    case actions.UPDATE_PROFILE:
      return updateProfile(state, action as UpdateProfileAction, fullState)

    case actions.DELETE_PROFILE:
      return deleteProfile(state, action as DeleteProfileAction, fullState)

    default:
      return state
  }
}

export default reducer
