import { Action } from 'redux'

import { AddAppAction } from '../actions/add-app'
import { LoadAppsAction } from '../actions/load-apps'
import { RemoveAppAction } from '../actions/remove-app'
import * as actions from '../consts/actions'
import { State } from '../states'
import { AppsState, defaultAppsState } from '../states/apps'

const loadApps = (state: AppsState, action: LoadAppsAction, fullState: State): AppsState => {
  return {
    ...state,
    apps: [...action.apps],
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

const reducer = (
  state: AppsState = defaultAppsState,
  action: Action<string>,
  fullState: State,
): AppsState => {
  switch (action.type) {
    case actions.LOAD_APPS:
      return loadApps(state, action as LoadAppsAction, fullState)

    case actions.ADD_APP:
      return addApp(state, action as AddAppAction, fullState)

    case actions.REMOVE_APP:
      return removeApp(state, action as RemoveAppAction, fullState)

    default:
      return state
  }
}

export default reducer
