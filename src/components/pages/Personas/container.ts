import { connect } from 'react-redux'
import { Action, Dispatch } from 'redux'

import setRedirect from '../../../actions/persona/set-redirect'
import fetchPersonas from '../../../actions/personas/fetch-personas'
import fetchPersonasApps from '../../../actions/personas/fetch-personas-apps'
import { State } from '../../../states'
import Personas from './Personas'

const enchance = connect(
  (state: State) => ({
    personas: state.personas.personas,
    apps: state.personas.apps,
  }),
  (dispatch: Dispatch<Action>) => ({
    loadPersonas: () => dispatch(fetchPersonas()),
    loadApps: () => dispatch(fetchPersonasApps()),
    unsetRedirect: () => dispatch(setRedirect(false)),
  }),
)

export default enchance(Personas)
