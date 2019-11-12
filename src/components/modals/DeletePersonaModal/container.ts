import { connect } from 'react-redux'
import { Action, Dispatch } from 'redux'

import startDeletePersona from '../../../actions/persona/start-delete-persona'
import { State } from '../../../states'
import DeletePersonaModal from './DeletePersonaModal'

const enchance = connect(
  (state: State) => ({
    id: state.persona.id,
    name: state.persona.personaName,
    apps: state.persona.apps,
  }),
  (dispatch: Dispatch<Action>) => ({
    onDeletePersona: (id: string) => dispatch(startDeletePersona(id)),
  }),
)

export default enchance(DeletePersonaModal)
