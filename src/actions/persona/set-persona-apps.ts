import { Action } from 'redux'

import { SET_PERSONA_APPS } from '../../consts/actions/persona'
import { Apps } from '../../types/apps'

export interface SetPersonaAppsAction extends Action<string> {
  apps: Apps
}

const setPersonaApps = (apps: Apps): SetPersonaAppsAction => ({
  apps,
  type: SET_PERSONA_APPS,
})

export default setPersonaApps
