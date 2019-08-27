import { Action } from 'redux'
import { defaultState, State } from '../states'
import apps from './apps'
import landing from './landing'
import profile from './profile'

const reducer = (state: State = defaultState, action: Action<string>) => ({
  landing: landing(state.landing, action, state),
  profile: profile(state.profile, action, state),
  apps: apps(state.apps, action, state),
})

export default reducer
