import { connect } from 'react-redux'
import { Action } from 'redux'
import { ThunkDispatch } from 'redux-thunk'

import hideRemoveAppModal from '../../../actions/hide-remove-app-modal'
import removeApp from '../../../actions/remove-app'
import { State } from '../../../states'
import RemoveAppModal from './RemoveAppModal'

const enchance = connect(
  (state: State) => ({
    isOpen: state.apps.showRemoveAppModal,
    app: state.apps.selectedApp,
    claim: state.apps.selectedAppClaim,
  }),
  (dispatch: ThunkDispatch<State, void, Action>) => ({
    onClose: () => dispatch(hideRemoveAppModal()),
    onOk: () => dispatch(removeApp()),
  }),
)

export default enchance(RemoveAppModal)
