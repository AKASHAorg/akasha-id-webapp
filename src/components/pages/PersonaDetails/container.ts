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
    avatar: state.persona.avatar,
    name: state.persona.name,
    description: state.persona.description,
    coverImage: state.persona.coverImage,
    email: state.persona.email,
    url: state.persona.url,
    address: state.persona.address,
    ethAddress: state.persona.ethAddress,
    apps: state.persona.apps,
  }),
  (dispatch: Dispatch<Action>) => ({
    loadPersona: (personaId: string) => dispatch(fetchPersona(personaId)),
    loadApps: (personaId: string) => dispatch(fetchPersonaApps(personaId)),
    unsetRedirect: () => dispatch(setRedirect(false)),
  }),
)

export default enchance(PersonaDetails)
