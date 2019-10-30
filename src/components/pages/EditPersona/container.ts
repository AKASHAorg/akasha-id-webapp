import { connect } from 'react-redux'
import { Action, Dispatch } from 'redux'

import fetchPersona from '../../../actions/persona/fetch-persona'
import startUpdatePersona from '../../../actions/persona/start-update-persona'
import { State } from '../../../states'
import { PersonaData } from '../../../types/users'
import EditPersona from './EditPersona'

const enchance = connect(
  (state: State, props) => ({
    redirect: state.persona.redirect,
  }),
  (dispatch: Dispatch<Action>) => ({
    loadPersona: (personaId: string) => dispatch(fetchPersona(personaId)),
    onSubmit: (formData: PersonaData) => {
      dispatch(startUpdatePersona(formData))
    },
  }),
)

export default enchance(EditPersona)
