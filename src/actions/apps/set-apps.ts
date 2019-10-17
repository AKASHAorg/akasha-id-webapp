import { Action } from 'redux'

import { SET_APPS } from '../../consts/actions/apps'
import { Apps } from '../../types/apps'

export interface SetAppsAction extends Action<string> {
  apps: Apps
}

const setApps = (apps: Apps): SetAppsAction => ({
  apps,
  type: SET_APPS,
})

export default setApps
