import { connect } from 'react-redux'
import { Action, Dispatch } from 'redux'

import fetchApps from '../../../actions/apps/fetch-apps'
import { State } from '../../../states'
import Apps from './Apps'

const enchance = connect(
  (state: State) => ({
    apps: state.apps.apps,
  }),
  (dispatch: Dispatch<Action>) => ({
    loadApps: () => dispatch(fetchApps()),
  }),
)

export default enchance(Apps)
