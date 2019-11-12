import { Action } from 'redux'

import { SetPersonasAction } from '../actions/personas/set-personas'
import { SetPersonasAppsAction } from '../actions/personas/set-personas-apps'
import * as actions from '../consts/actions'
import { State } from '../states'
import { defaultPersonasState, PersonasState } from '../states/personas'

const setPersonas = (
  state: PersonasState,
  action: SetPersonasAction,
  fullState: State,
): PersonasState => {
  return {
    ...state,
    personas: [...action.personas],
  }
}

const setPersonasApps = (
  state: PersonasState,
  action: SetPersonasAppsAction,
  fullState: State,
): PersonasState => {
  return {
    ...state,
    apps: { ...action.apps },
  }
}

const reducer = (
  state: PersonasState = defaultPersonasState,
  action: Action<string>,
  fullState: State,
): PersonasState => {
  switch (action.type) {
    case actions.personas.SET_PERSONAS:
      return setPersonas(state, action as SetPersonasAction, fullState)

    case actions.personas.SET_PERSONAS_APPS:
      return setPersonasApps(state, action as SetPersonasAppsAction, fullState)

    default:
      return state
  }
}

export default reducer
