import { Action } from 'redux'

import { FetchClaimAction } from '../actions/app-details/fetch-claim'
import { SetClaimAction } from '../actions/app-details/set-claim'
import { SetRedirectToAppsAction } from '../actions/app-details/set-redirect-to-apps'
import * as actions from '../consts/actions'
import { State } from '../states'
import { AppDetailsState, defaultAppDetailsState } from '../states/app-details'

const fetchClaim = (
  state: AppDetailsState,
  action: FetchClaimAction,
  fullState: State,
): AppDetailsState => {
  return {
    ...state,
    token: action.token,
  }
}

const setClaim = (
  state: AppDetailsState,
  action: SetClaimAction,
  fullState: State,
): AppDetailsState => {
  return {
    ...state,
    app: action.app,
    claim: action.claim,
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
    case actions.appDetails.FETCH_CLAIM:
      return fetchClaim(state, action as FetchClaimAction, fullState)

    case actions.appDetails.SET_CLAIM:
      return setClaim(state, action as SetClaimAction, fullState)

    case actions.appDetails.SET_REDIRECT_TO_APPS:
      return setRedirectToApps(state, action as SetRedirectToAppsAction, fullState)

    default:
      return state
  }
}

export default reducer
