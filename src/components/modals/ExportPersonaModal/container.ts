import { connect } from 'react-redux'
import { Action, Dispatch } from 'redux'

import hideExportPersonaModal from '../../../actions/persona/hide-export-persona-modal'
import { State } from '../../../states'
import ExportPersonaModal from './ExportPersonaModal'

const enchance = connect(
  (state: State) => ({
    isOpen: state.persona.showExportPersonaModal,
    exportText: state.persona.exportPersonaText,
  }),
  (dispatch: Dispatch<Action>) => ({
    onClose: () => dispatch(hideExportPersonaModal()),
    onOk: () => dispatch({ type: '123' }),
  }),
)

export default enchance(ExportPersonaModal)
