import { connect } from 'react-redux'
import { Action } from 'redux'
import { ThunkDispatch } from 'redux-thunk'

import removeApp from '../../../../../actions/remove-app'
import { State } from '../../../../../states'
import App from './App'

const enchance = connect(
  (state: State) => ({}),
  (dispatch: ThunkDispatch<State, void, Action>) => ({
    onRemoveApp: (id: string) => dispatch(removeApp(id)),
  }),
)

export default enchance(App)
