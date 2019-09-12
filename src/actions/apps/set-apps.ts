import { Action } from 'redux'

import { SET_APPS } from '../../consts/actions/apps'
import { App } from '../../types/apps'

export interface SetAppsAction extends Action<string> {
  apps: { [token: string]: App }
}

const setApps = (apps: { [token: string]: App }): SetAppsAction => ({
  apps,
  type: SET_APPS,
})

export default setApps
