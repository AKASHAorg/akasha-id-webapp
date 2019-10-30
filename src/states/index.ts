import { FormStateMap } from 'redux-form'
import { AccountState, defaultAccountState } from './account'
import { AppDetailsState, defaultAppDetailsState } from './app-details'
import { AppsState, defaultAppsState } from './apps'
import { defaultLandingState, LandingState } from './landing'
import { defaultPersonaState, PersonaState } from './persona'
import { defaultPersonasState, PersonasState } from './personas'
import { defaultSearchState, SearchState } from './search'

export interface State {
  form: FormStateMap | undefined
  landing: LandingState
  personas: PersonasState
  persona: PersonaState
  apps: AppsState
  account: AccountState
  appDetails: AppDetailsState
  search: SearchState
}

const defaultState: State = {
  form: undefined,
  landing: defaultLandingState,
  personas: defaultPersonasState,
  persona: defaultPersonaState,
  apps: defaultAppsState,
  account: defaultAccountState,
  appDetails: defaultAppDetailsState,
  search: defaultSearchState,
}

export { defaultState }
