import { connect } from 'react-redux'
import { Action, Dispatch } from 'redux'

import startSignOut from '../../../actions/account/start-sign-out'
import { State } from '../../../states'
import Settings from './Settings'

const enchance = connect(
  (state: State) => ({}),
  (dispatch: Dispatch<Action>) => ({
    onSignOut: () => dispatch(startSignOut()),
  }),
)

export default enchance(Settings)
