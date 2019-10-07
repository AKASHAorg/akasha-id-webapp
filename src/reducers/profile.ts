import { Action } from 'redux'

import { HideExportProfileModalAction } from '../actions/profile/hide-export-profile-modal'
import { SetExportProfileTextAction } from '../actions/profile/set-export-profile-text'
import { SetProfileAction } from '../actions/profile/set-profile'
import { ShowExportProfileModalAction } from '../actions/profile/show-export-profile-modal'
import { UpdateProfileAction } from '../actions/profile/update-profile'
import * as actions from '../consts/actions'
import { State } from '../states'
import { defaultProfileState, ProfileState } from '../states/profile'

const setProfile = (
  state: ProfileState,
  action: SetProfileAction,
  fullState: State,
): ProfileState => {
  if (!action.profileData) {
    return {
      ...state,
      address: {
        addressLocality: '',
        addressRegion: '',
        postalCode: '',
        streetAddress: '',
      },
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
    address: { ...action.address },
    email: action.email,
    photo: action.photo,
    picture: action.picture,
    jobTitle: action.jobTitle,
    givenName: action.givenName,
    familyName: action.familyName,
    birthDate: action.birthDate,
    telephone: action.telephone,
    url: action.url,
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
    case actions.profile.SET_PROFILE:
      return setProfile(state, action as SetProfileAction, fullState)

    case actions.profile.UPDATE_PROFILE:
      return updateProfile(state, action as UpdateProfileAction, fullState)

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
