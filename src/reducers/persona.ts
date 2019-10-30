import { Action } from 'redux'

import { HideExportPersonaModalAction } from '../actions/persona/hide-export-persona-modal'
import { SetExportPersonaTextAction } from '../actions/persona/set-export-persona-text'
import { SetPersonaAction } from '../actions/persona/set-persona'
import { SetPersonaAppsAction } from '../actions/persona/set-persona-apps'
import { SetRedirectAction } from '../actions/persona/set-redirect'
import { ShowExportPersonaModalAction } from '../actions/persona/show-export-persona-modal'
import * as actions from '../consts/actions'
import { State } from '../states'
import { defaultPersonaState, PersonaState } from '../states/persona'

const setPersona = (
  state: PersonaState,
  action: SetPersonaAction,
  fullState: State,
): PersonaState => {
  if (!action.persona) {
    return {
      ...state,
      id: '',
      personaName: '',
      address: {
        addressLocality: '',
        addressRegion: '',
        postalCode: '',
        streetAddress: '',
      },
      email: '',
      photo: '',
      picture: '',
      jobTitle: '',
      givenName: '',
      familyName: '',
      birthDate: '',
      telephone: '',
      url: '',
      about: '',
      location: '',
    }
  }

  return {
    ...state,
    ...action.persona,
  }
}

const setPersonaApps = (
  state: PersonaState,
  action: SetPersonaAppsAction,
  fullState: State,
): PersonaState => {
  return {
    ...state,
    apps: [...action.apps],
  }
}

const showExportPersonaModal = (
  state: PersonaState,
  action: ShowExportPersonaModalAction,
  fullState: State,
): PersonaState => {
  return {
    ...state,
    showExportPersonaModal: true,
  }
}

const hideExportPersonaModal = (
  state: PersonaState,
  action: HideExportPersonaModalAction,
  fullState: State,
): PersonaState => {
  return {
    ...state,
    showExportPersonaModal: false,
    exportPersonaText: '',
  }
}

const setExportPersonaText = (
  state: PersonaState,
  action: SetExportPersonaTextAction,
  fullState: State,
): PersonaState => {
  return {
    ...state,
    exportPersonaText: action.personaText,
  }
}

const setRedirect = (
  state: PersonaState,
  action: SetRedirectAction,
  fullState: State,
): PersonaState => {
  return {
    ...state,
    redirect: action.redirect,
  }
}

const reducer = (
  state: PersonaState = defaultPersonaState,
  action: Action<string>,
  fullState: State,
): PersonaState => {
  switch (action.type) {
    case actions.persona.SET_PERSONA:
      return setPersona(state, action as SetPersonaAction, fullState)

    case actions.persona.SET_PERSONA_APPS:
      return setPersonaApps(state, action as SetPersonaAppsAction, fullState)

    case actions.persona.SHOW_EXPORT_PERSONA_MODAL:
      return showExportPersonaModal(state, action as ShowExportPersonaModalAction, fullState)

    case actions.persona.HIDE_EXPORT_PERSONA_MODAL:
      return hideExportPersonaModal(state, action as HideExportPersonaModalAction, fullState)

    case actions.persona.SET_EXPORT_PERSONA_TEXT:
      return setExportPersonaText(state, action as SetExportPersonaTextAction, fullState)

    case actions.persona.SET_REDIRECT:
      return setRedirect(state, action as SetRedirectAction, fullState)

    default:
      return state
  }
}

export default reducer
