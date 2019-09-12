import { connect } from 'react-redux'
import { Action, Dispatch } from 'redux'

import hideRemoveAppModal from '../../../actions/apps/hide-remove-app-modal'
import startRemoveApp from '../../../actions/apps/start-remove-app'
import { State } from '../../../states'
import RemoveAppModal from './RemoveAppModal'

const enchance = connect(
  (state: State) => ({
    isOpen: state.apps.showRemoveAppModal,
    app: state.apps.selectedApp,
    claim: state.apps.selectedAppClaim,
  }),
  (dispatch: Dispatch<Action>) => ({
    onClose: () => dispatch(hideRemoveAppModal()),
    onOk: () => dispatch(startRemoveApp()),
  }),
)

export default enchance(RemoveAppModal)
