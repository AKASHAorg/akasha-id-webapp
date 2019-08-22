import { Action } from 'redux'
import { defaultState, State } from '../states'
import landing from './landing'
import profile from './profile'

const reducer = (state: State = defaultState, action: Action<string>) => ({
  landing: landing(state.landing, action, state),
  profile: profile(state.profile, action, state),
})

export default reducer
