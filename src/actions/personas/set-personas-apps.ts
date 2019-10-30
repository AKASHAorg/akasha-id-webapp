import { Action } from 'redux'

import { SET_PERSONAS_APPS } from '../../consts/actions/personas'
import { Apps } from '../../types/apps'

export interface SetPersonasAppsAction extends Action<string> {
  apps: { [personaId: string]: Apps }
}

const setPersonasApps = (apps: { [personaId: string]: Apps }): SetPersonasAppsAction => ({
  apps,
  type: SET_PERSONAS_APPS,
})

export default setPersonasApps
