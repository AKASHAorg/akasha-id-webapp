import { Action } from 'redux'

import { SET_REDIRECT_TO_APPS } from '../../consts/actions/app-details'

export interface SetRedirectToAppsAction extends Action<string> {
  redirect: boolean
}

const setRedirectToApps = (redirect: boolean): SetRedirectToAppsAction => ({
  redirect,
  type: SET_REDIRECT_TO_APPS,
})

export default setRedirectToApps
