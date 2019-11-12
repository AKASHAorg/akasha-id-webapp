import { Action } from 'redux'

import { SET_ALL_APPS } from '../../consts/actions/apps'
import { Apps } from '../../types/apps'

export interface SetAllAppsAction extends Action<string> {
  apps: Apps
}

const setAllApps = (apps: Apps): SetAllAppsAction => ({
  apps,
  type: SET_ALL_APPS,
})

export default setAllApps
