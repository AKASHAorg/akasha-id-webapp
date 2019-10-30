import { connect } from 'react-redux'
import { Action, Dispatch } from 'redux'

import setPersona from '../../../actions/persona/set-persona'
import startCreatePersona from '../../../actions/persona/start-create-persona'
import { State } from '../../../states'
import { PersonaData } from '../../../types/users'
import CreatePersona from './CreatePersona'

const enchance = connect(
  (state: State) => ({
    redirect: state.persona.redirect,
  }),
  (dispatch: Dispatch<Action>) => ({
    resetPersona: () => dispatch(setPersona()),
    onSubmit: (formData: PersonaData) => {
      dispatch(startCreatePersona(formData))
    },
  }),
)

export default enchance(CreatePersona)
