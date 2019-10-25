import { connect } from 'react-redux'
import { Action, Dispatch } from 'redux'

import startRemoveApp from '../../../actions/app-details/start-remove-app'
import { State } from '../../../states'
import UnlinkProfileModal from './UnlinkProfileModal'

const enchance = connect(
  (state: State) => ({
    name: state.account.name,
    app: state.appDetails.app,
    redirect: state.appDetails.redirectToApps,
  }),
  (dispatch: Dispatch<Action>) => ({
    onRemoveApp: () => dispatch(startRemoveApp()),
  }),
)

export default enchance(UnlinkProfileModal)
