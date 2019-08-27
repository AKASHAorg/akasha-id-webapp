import { Action } from 'redux'

import { LoadAppsAction } from '../actions/load-apps'
import { RemoveAppAction } from '../actions/remove-app'
import * as actions from '../consts/actions'
import { State } from '../states'
import { AppsState, defaultAppsState } from '../states/apps'

const loadApps = (state: AppsState, action: LoadAppsAction, fullState: State): AppsState => {
  return {
    ...state,
    apps: Object.entries(action.apps).map(([id, app]) => ({
      ...app,
      id,
    })),
  }
}

const removeApp = (state: AppsState, action: RemoveAppAction, fullState: State): AppsState => {
  return {
    ...state,
    apps: state.apps.filter(app => app.id !== action.id),
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

    case actions.REMOVE_APP:
      return removeApp(state, action as RemoveAppAction, fullState)

    default:
      return state
  }
}

export default reducer
