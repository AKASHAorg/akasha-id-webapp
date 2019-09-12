import { Action } from 'redux'

import { HideAddAppModalAction } from '../actions/apps/hide-add-app-modal'
import { HideRemoveAppModalAction } from '../actions/apps/hide-remove-app-modal'
import { RemoveAppAction } from '../actions/apps/remove-app'
import { RequestProfileAction } from '../actions/apps/request-profile'
import { SetAddAppModalAppRequestAction } from '../actions/apps/set-add-app-modal-app-request'
import { SetAddAppModalStepAction } from '../actions/apps/set-add-app-modal-step'
import { SetAppsAction } from '../actions/apps/set-apps'
import { SetRemoveAppModalClaimAction } from '../actions/apps/set-remove-app-modal-claim'
import { ShowAddAppModalAction } from '../actions/apps/show-add-app-modal'
import { ShowRemoveAppModalAction } from '../actions/apps/show-remove-app-modal'
import * as actions from '../consts/actions'
import { State } from '../states'
import { AppsState, defaultAppsState } from '../states/apps'
import { App } from '../types/apps'

const setApps = (state: AppsState, action: SetAppsAction, fullState: State): AppsState => {
  return {
    ...state,
    apps: { ...action.apps },
  }
}

const showAddAppModal = (
  state: AppsState,
  action: ShowAddAppModalAction,
  fullState: State,
): AppsState => {
  return {
    ...state,
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

const showRemoveAppModal = (
  state: AppsState,
  action: ShowRemoveAppModalAction,
  fullState: State,
): AppsState => {
  return {
    ...state,
    selectedAppToken: action.token,
    showRemoveAppModal: true,
  }
}

const setRemoveAppModalClaim = (
  state: AppsState,
  action: SetRemoveAppModalClaimAction,
  fullState: State,
): AppsState => {
  const selectedApp = state.apps[action.token]
  if (!selectedApp) {
    return state
  }

  return {
    ...state,
    selectedApp,
    selectedAppClaim: action.claim,
    showRemoveAppModal: true,
  }
}

const hideRemoveAppModal = (
  state: AppsState,
  action: HideRemoveAppModalAction,
  fullState: State,
): AppsState => {
  return {
    ...state,
    showRemoveAppModal: false,
  }
}

const removeApp = (state: AppsState, action: RemoveAppAction, fullState: State): AppsState => {
  const apps = { ...state.apps }
  delete apps[state.selectedAppToken]

  return {
    ...state,
    apps,
    showRemoveAppModal: false,
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

const setAddAppModalAppRequest = (
  state: AppsState,
  action: SetAddAppModalAppRequestAction,
  fullState: State,
): AppsState => {
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
  if (!action.allowed) {
    return state
  }

  const app: App = {
    name: state.appRequest!.appInfo.name,
    description: state.appRequest!.appInfo.description,
    icon: state.appRequest!.appInfo.icon,
    url: state.appRequest!.appInfo.url,
    claim: { ...action.claim! },
  }
  return {
    ...state,
    apps: { ...state.apps, [action.token!]: app },
  }
}

const reducer = (
  state: AppsState = defaultAppsState,
  action: Action<string>,
  fullState: State,
): AppsState => {
  switch (action.type) {
    case actions.apps.SET_APPS:
      return setApps(state, action as SetAppsAction, fullState)

    case actions.apps.SHOW_ADD_APP_MODAL:
      return showAddAppModal(state, action as ShowAddAppModalAction, fullState)

    case actions.apps.HIDE_ADD_APP_MODAL:
      return hideAddAppModal(state, action as HideAddAppModalAction, fullState)

    case actions.apps.SHOW_REMOVE_APP_MODAL:
      return showRemoveAppModal(state, action as ShowRemoveAppModalAction, fullState)

    case actions.apps.SET_REMOVE_APP_MODAL_CLAIM:
      return setRemoveAppModalClaim(state, action as SetRemoveAppModalClaimAction, fullState)

    case actions.apps.HIDE_REMOVE_APP_MODAL:
      return hideRemoveAppModal(state, action as HideRemoveAppModalAction, fullState)

    case actions.apps.REMOVE_APP:
      return removeApp(state, action as RemoveAppAction, fullState)

    case actions.apps.SET_ADD_APP_MODAL_STEP:
      return setAddAppModalStep(state, action as SetAddAppModalStepAction, fullState)

    case actions.apps.SET_ADD_APP_MODAL_APP_REQUEST:
      return setAddAppModalAppRequest(state, action as SetAddAppModalAppRequestAction, fullState)

    case actions.apps.REQUEST_PROFILE:
      return requestProfile(state, action as RequestProfileAction, fullState)

    default:
      return state
  }
}

export default reducer
