import { connect } from 'react-redux'
import { Action, Dispatch } from 'redux'

import startDeleteAccount from '../../../actions/account/start-delete-account'
import { State } from '../../../states'
import Account from './Account'

const enchance = connect(
  (state: State) => ({}),
  (dispatch: Dispatch<Action>) => ({
    onDeleteAccount: () => dispatch(startDeleteAccount()),
  }),
)

export default enchance(Account)
