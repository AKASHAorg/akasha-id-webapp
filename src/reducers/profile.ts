import { Action } from 'redux'

import { DeleteProfileAction } from '../actions/delete-profile'
import { LoadProfileAction } from '../actions/load-profile'
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
    userId: action.profile!.id,
    name: action.profile!.name,
    signedIn: true,
  }
}

const signIn = (state: ProfileState, action: SignInAction, fullState: State): ProfileState => {
  if (!action.valid) {
    return state
  }

  return {
    ...state,
    userId: action.profile!.id,
    name: action.profile!.name,
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

const loadProfile = (
  state: ProfileState,
  action: LoadProfileAction,
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
      image: '',
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
    image: action.image,
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

    case actions.LOAD_PROFILE:
      return loadProfile(state, action as LoadProfileAction, fullState)

    case actions.UPDATE_PROFILE:
      return updateProfile(state, action as UpdateProfileAction, fullState)

    case actions.DELETE_PROFILE:
      return deleteProfile(state, action as DeleteProfileAction, fullState)

    default:
      return state
  }
}

export default reducer
