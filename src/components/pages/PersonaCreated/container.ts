import { connect } from 'react-redux'
import { Action, Dispatch } from 'redux'

import setRedirect from '../../../actions/persona/set-redirect'
import { State } from '../../../states'
import PersonaCreated from './PersonaCreated'

const enchance = connect(
  (state: State) => ({}),
  (dispatch: Dispatch<Action>) => ({
    unsetRedirect: () => dispatch(setRedirect(false)),
  }),
)

export default enchance(PersonaCreated)
