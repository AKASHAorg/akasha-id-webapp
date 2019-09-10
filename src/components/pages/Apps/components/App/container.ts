import { connect } from 'react-redux'
import { Action } from 'redux'
import { ThunkDispatch } from 'redux-thunk'

import showRemoveAppModal from '../../../../../actions/show-remove-app-modal'
import { State } from '../../../../../states'
import App from './App'

const enchance = connect(
  (state: State) => ({}),
  (dispatch: ThunkDispatch<State, void, Action>) => ({
    onRemoveApp: (token: string) => dispatch(showRemoveAppModal(token)),
  }),
)

export default enchance(App)
