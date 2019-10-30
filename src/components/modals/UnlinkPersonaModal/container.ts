import { connect } from 'react-redux'
import { Action, Dispatch } from 'redux'

import startRemoveApp from '../../../actions/app-details/start-remove-app'
import { State } from '../../../states'
import UnlinkPersonaModal from './UnlinkPersonaModal'

const enchance = connect(
  (state: State) => ({}),
  (dispatch: Dispatch<Action>) => ({
    onRemoveApp: () => dispatch(startRemoveApp()),
  }),
)

export default enchance(UnlinkPersonaModal)
