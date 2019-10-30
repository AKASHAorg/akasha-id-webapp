import { Action } from 'redux'

import { FetchAppAction } from '../actions/app-details/fetch-app'
import { SetAppAction } from '../actions/app-details/set-app'
import { SetRedirectToAppsAction } from '../actions/app-details/set-redirect-to-apps'
import * as actions from '../consts/actions'
import { State } from '../states'
import { AppDetailsState, defaultAppDetailsState } from '../states/app-details'

const fetchApp = (
  state: AppDetailsState,
  action: FetchAppAction,
  fullState: State,
): AppDetailsState => {
  return {
    ...state,
    token: action.id,
  }
}

const setApp = (
  state: AppDetailsState,
  action: SetAppAction,
  fullState: State,
): AppDetailsState => {
  return {
    ...state,
    app: action.app,
  }
}

const setRedirectToApps = (
  state: AppDetailsState,
  action: SetRedirectToAppsAction,
  fullState: State,
): AppDetailsState => ({
  ...state,
  redirectToApps: action.redirect,
})

const reducer = (
  state: AppDetailsState = defaultAppDetailsState,
  action: Action<string>,
  fullState: State,
): AppDetailsState => {
  switch (action.type) {
    case actions.appDetails.FETCH_APP:
      return fetchApp(state, action as FetchAppAction, fullState)

    case actions.appDetails.SET_APP:
      return setApp(state, action as SetAppAction, fullState)

    case actions.appDetails.SET_REDIRECT_TO_APPS:
      return setRedirectToApps(state, action as SetRedirectToAppsAction, fullState)

    default:
      return state
  }
}

export default reducer
