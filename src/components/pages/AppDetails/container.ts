import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Action, Dispatch } from 'redux'

import fetchApp from '../../../actions/app-details/fetch-app'
import startRemoveApp from '../../../actions/app-details/start-remove-app'
import fetchPersona from '../../../actions/persona/fetch-persona'
import { State } from '../../../states'
import AppDetails from './AppDetails'

const enchance = connect(
  (state: State) => ({
    app: state.appDetails.app,
    persona: state.persona,
    claim: state.appDetails.claim,
    redirect: state.appDetails.redirectToApps,
  }),
  (dispatch: Dispatch<Action>) => ({
    fetchApp: (token: string) => dispatch(fetchApp(token)),
    fetchPersona: (personaId: string) => dispatch(fetchPersona(personaId)),
    startRemoveApp: () => dispatch(startRemoveApp()),
  }),
)

export default withRouter(enchance(AppDetails))
