import { Action } from 'redux'

import { SetPublicProfilesAction } from '../actions/landing/set-public-profiles'
import { SetRegisterAppLinkAction } from '../actions/landing/set-register-app-link'
import { SignUpAction } from '../actions/landing/sign-up'
import { DeleteProfileAction } from '../actions/profile/delete-profile'
import { UpdateProfileAction } from '../actions/profile/update-profile'
import * as actions from '../consts/actions'
import { State } from '../states'
import { defaultLandingState, LandingState } from '../states/landing'

const setPublicProfiles = (
  state: LandingState,
  action: SetPublicProfilesAction,
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
    users: [...state.users, { ...action.profile }],
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
    case actions.landing.SET_PUBLIC_PROFILES:
      return setPublicProfiles(state, action as SetPublicProfilesAction, fullState)

    case actions.landing.SIGN_UP:
      return signUp(state, action as SignUpAction, fullState)

    case actions.profile.UPDATE_PROFILE:
      return updateProfile(state, action as UpdateProfileAction, fullState)

    case actions.profile.DELETE_PROFILE:
      return deleteProfile(state, action as DeleteProfileAction, fullState)

    case actions.landing.SET_REGISTER_APP_LINK:
      return setRegisterAppLink(state, action as SetRegisterAppLinkAction, fullState)

    default:
      return state
  }
}

export default reducer
