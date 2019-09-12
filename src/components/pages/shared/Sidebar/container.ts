import { connect } from 'react-redux'
import { Action, Dispatch } from 'redux'

import startSignOut from '../../../../actions/profile/start-sign-out'
import { State } from '../../../../states'
import Sidebar from './Sidebar'

const enchance = connect(
  (state: State) => ({}),
  (dispatch: Dispatch<Action>) => ({
    onSignOut: () => dispatch(startSignOut()),
  }),
)

export default enchance(Sidebar)
