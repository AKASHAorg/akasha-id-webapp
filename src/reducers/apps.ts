import { Action } from 'redux'

import { AddAppAction } from '../actions/add-app'
import { ChangeShareFirstNameAction } from '../actions/change-share-first-name'
import { ChangeShareLastNameAction } from '../actions/change-share-last-name'
import { HideAddAppModalAction } from '../actions/hide-add-app-modal'
import { RegisterAppAction } from '../actions/register-app'
import { RemoveAppAction } from '../actions/remove-app'
import { RequestProfileAction } from '../actions/request-profile'
import { SetAddAppModalStepAction } from '../actions/set-add-app-modal-step'
import { ShowAddAppModalAction } from '../actions/show-add-app-modal'
import * as actions from '../consts/actions'
import { State } from '../states'
import { AppsState, defaultAppsState } from '../states/apps'

const showAddAppModal = (
  state: AppsState,
  action: ShowAddAppModalAction,
  fullState: State,
): AppsState => {
  return {
    ...state,
    signUpLink: action.link,
    showAddAppModal: true,
  }
}

const hideAddAppModal = (
  state: AppsState,
  action: HideAddAppModalAction,
  fullState: State,
): AppsState => {
  return {
    ...state,
    showAddAppModal: false,
  }
}

const addApp = (state: AppsState, action: AddAppAction, fullState: State): AppsState => {
  return {
    ...state,
    apps: [...state.apps, { ...action }],
  }
}

const removeApp = (state: AppsState, action: RemoveAppAction, fullState: State): AppsState => {
  return {
    ...state,
    apps: state.apps.filter(app => app.token !== action.token),
  }
}

const setAddAppModalStep = (
  state: AppsState,
  action: SetAddAppModalStepAction,
  fullState: State,
): AppsState => {
  return {
    ...state,
    addAppStep: action.step,
  }
}

const registerApp = (state: AppsState, action: RegisterAppAction, fullState: State): AppsState => {
  return {
    ...state,
    appRequest: { ...action.appRequest },
  }
}

const requestProfile = (
  state: AppsState,
  action: RequestProfileAction,
  fullState: State,
): AppsState => {
  return {
    ...state,
    showAddAppModal: false,
  }
}

const changeShareFirstName = (
  state: AppsState,
  action: ChangeShareFirstNameAction,
  fullState: State,
): AppsState => {
  return {
    ...state,
    shareFirstName: action.value,
  }
}

const changeShareLastName = (
  state: AppsState,
  action: ChangeShareLastNameAction,
  fullState: State,
): AppsState => {
  return {
    ...state,
    shareLastName: action.value,
  }
}

const reducer = (
  state: AppsState = defaultAppsState,
  action: Action<string>,
  fullState: State,
): AppsState => {
  switch (action.type) {
    case actions.SHOW_ADD_APP_MODAL:
      return showAddAppModal(state, action as ShowAddAppModalAction, fullState)

    case actions.HIDE_ADD_APP_MODAL:
      return hideAddAppModal(state, action as HideAddAppModalAction, fullState)

    case actions.ADD_APP:
      return addApp(state, action as AddAppAction, fullState)

    case actions.REMOVE_APP:
      return removeApp(state, action as RemoveAppAction, fullState)

    case actions.SET_ADD_APP_MODAL_STEP:
      return setAddAppModalStep(state, action as SetAddAppModalStepAction, fullState)

    case actions.REGISTER_APP:
      return registerApp(state, action as RegisterAppAction, fullState)

    case actions.REQUEST_PROFILE:
      return requestProfile(state, action as RequestProfileAction, fullState)

    case actions.CHANGE_SHARE_FIRST_NAME:
      return changeShareFirstName(state, action as ChangeShareFirstNameAction, fullState)

    case actions.CHANGE_SHARE_LAST_NAME:
      return changeShareLastName(state, action as ChangeShareLastNameAction, fullState)

    default:
      return state
  }
}

export default reducer
