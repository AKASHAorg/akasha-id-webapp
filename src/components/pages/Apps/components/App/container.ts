import { connect } from 'react-redux'
import { Action, Dispatch } from 'redux'

import showRemoveAppModal from '../../../../../actions/apps/show-remove-app-modal'
import { State } from '../../../../../states'
import App from './App'

const enchance = connect(
  (state: State) => ({}),
  (dispatch: Dispatch<Action>) => ({
    onRemoveApp: (token: string) => dispatch(showRemoveAppModal(token)),
  }),
)

export default enchance(App)
