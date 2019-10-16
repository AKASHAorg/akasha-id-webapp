import { Action } from 'redux'

import { SET_APPS } from '../../consts/actions/apps'
import { AppsList } from '../../types/apps'

export interface SetAppsAction extends Action<string> {
  apps: AppsList
}

const setApps = (apps: AppsList): SetAppsAction => ({
  apps,
  type: SET_APPS,
})

export default setApps
