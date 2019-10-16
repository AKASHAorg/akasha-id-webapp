import { connect } from 'react-redux'
import { Action, Dispatch } from 'redux'

import startDeleteProfile from '../../../actions/profile/start-delete-profile'
import { State } from '../../../states'
import Account from './Account'

const enchance = connect(
  (state: State) => ({}),
  (dispatch: Dispatch<Action>) => ({
    onDeleteProfile: () => dispatch(startDeleteProfile()),
  }),
)

export default enchance(Account)
