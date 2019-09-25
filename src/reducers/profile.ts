import { Action } from 'redux'

import { SignInAction } from '../actions/landing/sign-in'
import { SignUpAction } from '../actions/landing/sign-up'
import { DeleteProfileAction } from '../actions/profile/delete-profile'
import { HideExportProfileModalAction } from '../actions/profile/hide-export-profile-modal'
import { SetExportProfileTextAction } from '../actions/profile/set-export-profile-text'
import { SetProfileAction } from '../actions/profile/set-profile'
import { ShowExportProfileModalAction } from '../actions/profile/show-export-profile-modal'
import { SignOutAction } from '../actions/profile/sign-out'
import { UpdateProfileAction } from '../actions/profile/update-profile'
import * as actions from '../consts/actions'
import { State } from '../states'
import { defaultProfileState, ProfileState } from '../states/profile'

const signUp = (state: ProfileState, action: SignUpAction, fullState: State): ProfileState => {
  return {
    ...state,
    userId: action.profile.id,
    name: action.profile.name,
    signedIn: true,
  }
}

const signIn = (state: ProfileState, action: SignInAction, fullState: State): ProfileState => {
  return {
    ...state,
    userId: action.profile.id,
    name: action.profile.name,
    signedIn: true,
  }
}

const signOut = (state: ProfileState, action: SignOutAction, fullState: State): ProfileState => {
  return {
    ...state,
    userId: '',
    name: '',
    signedIn: false,
  }
}

const setProfile = (
  state: ProfileState,
  action: SetProfileAction,
  fullState: State,
): ProfileState => {
  if (!action.profileData) {
    return {
      ...state,
      addressLocality: '',
      addressRegion: '',
      postalCode: '',
      streetAddress: '',
      email: '',
      photo: '',
      picture: '',
      jobTitle: '',
      givenName: '',
      familyName: '',
      birthDate: '',
      telephone: '',
      url: '',
    }
  }

  return {
    ...state,
    ...action.profileData,
  }
}

const updateProfile = (
  state: ProfileState,
  action: UpdateProfileAction,
  fullState: State,
): ProfileState => {
  return {
    ...state,
    addressLocality: action.addressLocality,
    addressRegion: action.addressRegion,
    postalCode: action.postalCode,
    streetAddress: action.streetAddress,
    email: action.email,
    photo: action.photo,
    picture: action.picture,
    jobTitle: action.jobTitle,
    name: action.name,
    givenName: action.givenName,
    familyName: action.familyName,
    birthDate: action.birthDate,
    telephone: action.telephone,
    url: action.url,
  }
}

const deleteProfile = (
  state: ProfileState,
  action: DeleteProfileAction,
  fullState: State,
): ProfileState => {
  return {
    ...state,
    userId: '',
    name: '',
    signedIn: false,
  }
}

const showExportProfileModal = (
  state: ProfileState,
  action: ShowExportProfileModalAction,
  fullState: State,
): ProfileState => {
  return {
    ...state,
    showExportProfileModal: true,
  }
}

const hideExportProfileModal = (
  state: ProfileState,
  action: HideExportProfileModalAction,
  fullState: State,
): ProfileState => {
  return {
    ...state,
    showExportProfileModal: false,
    exportProfileText: '',
  }
}

const setExportProfileText = (
  state: ProfileState,
  action: SetExportProfileTextAction,
  fullState: State,
): ProfileState => {
  return {
    ...state,
    exportProfileText: action.profileText,
  }
}

const reducer = (
  state: ProfileState = defaultProfileState,
  action: Action<string>,
  fullState: State,
): ProfileState => {
  switch (action.type) {
    case actions.landing.SIGN_UP:
      return signUp(state, action as SignUpAction, fullState)

    case actions.landing.SIGN_IN:
      return signIn(state, action as SignInAction, fullState)

    case actions.profile.SIGN_OUT:
      return signOut(state, action as SignOutAction, fullState)

    case actions.profile.SET_PROFILE:
      return setProfile(state, action as SetProfileAction, fullState)

    case actions.profile.UPDATE_PROFILE:
      return updateProfile(state, action as UpdateProfileAction, fullState)

    case actions.profile.DELETE_PROFILE:
      return deleteProfile(state, action as DeleteProfileAction, fullState)

    case actions.profile.SHOW_EXPORT_PROFILE_MODAL:
      return showExportProfileModal(state, action as ShowExportProfileModalAction, fullState)

    case actions.profile.HIDE_EXPORT_PROFILE_MODAL:
      return hideExportProfileModal(state, action as HideExportProfileModalAction, fullState)

    case actions.profile.SET_EXPORT_PROFILE_TEXT:
      return setExportProfileText(state, action as SetExportProfileTextAction, fullState)

    default:
      return state
  }
}

export default reducer
