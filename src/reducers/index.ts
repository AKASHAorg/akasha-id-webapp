import { Action } from 'redux'
import { reducer as formReducer } from 'redux-form'

import { defaultState, State } from '../states'
import account from './account'
import appDetails from './app-details'
import apps from './apps'
import landing from './landing'
import persona from './persona'
import personas from './personas'
import search from './search'

const reducer = (state: State = defaultState, action: Action<string>) => ({
  form: formReducer(state.form, action),
  landing: landing(state.landing, action, state),
  personas: personas(state.personas, action, state),
  persona: persona(state.persona, action, state),
  apps: apps(state.apps, action, state),
  account: account(state.account, action, state),
  appDetails: appDetails(state.appDetails, action, state),
  search: search(state.search, action, state),
})

export default reducer
