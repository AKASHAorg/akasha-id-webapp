import { connect } from 'react-redux'
import { Action, Dispatch } from 'redux'

import fetchPersona from '../../../actions/persona/fetch-persona'
import fetchPersonaApps from '../../../actions/persona/fetch-persona-apps'
import setRedirect from '../../../actions/persona/set-redirect'
import { State } from '../../../states'
import PersonaDetails from './PersonaDetails'

const enchance = connect(
  (state: State) => ({
    personaName: state.persona.personaName,
    givenName: state.persona.givenName,
    about: state.persona.about,
    email: state.persona.email,
    telephone: state.persona.telephone,
    address: state.persona.location,
    apps: state.persona.apps,
    photo: state.persona.photo,
    picture: state.persona.picture,
  }),
  (dispatch: Dispatch<Action>) => ({
    loadPersona: (personaId: string) => dispatch(fetchPersona(personaId)),
    loadApps: (personaId: string) => dispatch(fetchPersonaApps(personaId)),
    unsetRedirect: () => dispatch(setRedirect(false)),
  }),
)

export default enchance(PersonaDetails)
