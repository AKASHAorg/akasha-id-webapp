import { connect } from 'react-redux'
import { Action, Dispatch } from 'redux'

import fetchPersona from '../../../actions/persona/fetch-persona'
import fetchPersonaApps from '../../../actions/persona/fetch-persona-apps'
import { State } from '../../../states'
import DeletePersona from './DeletePersona'

const enchance = connect(
  (state: State) => ({
    redirect: state.persona.redirect,
  }),
  (dispatch: Dispatch<Action>) => ({
    loadPersona: (personaId: string) => dispatch(fetchPersona(personaId)),
    loadApps: (personaId: string) => dispatch(fetchPersonaApps(personaId)),
  }),
)

export default enchance(DeletePersona)
