import { Action } from 'redux'

import { HideAddAppModalAction } from '../actions/hide-add-app-modal'
import { LoadAppsAction } from '../actions/load-apps'
import { RegisterAppAction } from '../actions/register-app'
import { RemoveAppAction } from '../actions/remove-app'
import { RequestProfileAction } from '../actions/request-profile'
import { SetAddAppModalStepAction } from '../actions/set-add-app-modal-step'
import { ShowAddAppModalAction } from '../actions/show-add-app-modal'
import * as actions from '../consts/actions'
import { State } from '../states'
import { AppsState, defaultAppsState } from '../states/apps'
import { App } from '../types/apps'

const loadApps = (state: AppsState, action: LoadAppsAction, fullState: State): AppsState => {
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

const removeApp = (state: AppsState, action: RemoveAppAction, fullState: State): AppsState => {
  const apps = { ...state.apps }
  delete apps[action.token]
  return {
    ...state,
    apps,
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
  if (!action.allowed) {
    return state
  }

  const app: App = {
    name: state.appRequest!.appInfo.name,
    description: state.appRequest!.appInfo.description,
    icon: state.appRequest!.appInfo.icon,
    url: state.appRequest!.appInfo.url,
    //    claim: { ...action.claim! },
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
    case actions.LOAD_APPS:
      return loadApps(state, action as LoadAppsAction, fullState)

    case actions.SHOW_ADD_APP_MODAL:
      return showAddAppModal(state, action as ShowAddAppModalAction, fullState)

    case actions.HIDE_ADD_APP_MODAL:
      return hideAddAppModal(state, action as HideAddAppModalAction, fullState)

    case actions.REMOVE_APP:
      return removeApp(state, action as RemoveAppAction, fullState)

    case actions.SET_ADD_APP_MODAL_STEP:
      return setAddAppModalStep(state, action as SetAddAppModalStepAction, fullState)

    case actions.REGISTER_APP:
      return registerApp(state, action as RegisterAppAction, fullState)

    case actions.REQUEST_PROFILE:
      return requestProfile(state, action as RequestProfileAction, fullState)

    default:
      return state
  }
}

export default reducer
