import { connect } from 'react-redux'
import { Action, Dispatch } from 'redux'

import hideExportProfileModal from '../../../actions/profile/hide-export-profile-modal'
import { State } from '../../../states'
import ExportProfileModal from './ExportProfileModal'

const enchance = connect(
  (state: State) => ({
    isOpen: state.profile.showExportProfileModal,
    exportText: state.profile.exportProfileText,
  }),
  (dispatch: Dispatch<Action>) => ({
    onClose: () => dispatch(hideExportProfileModal()),
    onOk: () => dispatch({ type: '123' }),
  }),
)

export default enchance(ExportProfileModal)
