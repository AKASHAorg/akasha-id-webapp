import { connect } from 'react-redux'
import { Action, Dispatch } from 'redux'

import { State } from '../../../states'
import CreateProfile from './CreateProfile'

const enchance = connect(
  (state: State) => ({}),
  (dispatch: Dispatch<Action>) => ({}),
)

export default enchance(CreateProfile)
