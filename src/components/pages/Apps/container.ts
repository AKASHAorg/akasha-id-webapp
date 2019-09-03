import { connect } from 'react-redux'
import { Action } from 'redux'
import { ThunkDispatch } from 'redux-thunk'

import loadApps from '../../../actions/load-apps'
import showAddAppModal from '../../../actions/show-add-app-modal'
import { State } from '../../../states'
import Apps from './Apps'

const enchance = connect(
  (state: State) => ({
    apps: state.apps.apps,
  }),
  (dispatch: ThunkDispatch<State, void, Action>) => ({
    onAddApp: () => dispatch(showAddAppModal()),
    loadApps: () => dispatch(loadApps()),
  }),
)

export default enchance(Apps)
