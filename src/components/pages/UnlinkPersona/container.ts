import { connect } from 'react-redux'
import { Action, Dispatch } from 'redux'

import fetchApp from '../../../actions/app-details/fetch-app'
import fetchPersona from '../../../actions/persona/fetch-persona'
import { State } from '../../../states'
import UnlinkPersona from './UnlinkPersona'

const enchance = connect(
  (state: State) => ({
    app: state.appDetails.app,
    persona: state.persona,
    redirect: state.appDetails.redirectToApps,
  }),
  (dispatch: Dispatch<Action>) => ({
    loadApp: (token: string) => dispatch(fetchApp(token)),
    loadPersona: (personaId: string) => dispatch(fetchPersona(personaId)),
  }),
)

export default enchance(UnlinkPersona)
