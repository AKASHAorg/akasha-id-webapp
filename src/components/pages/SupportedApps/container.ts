import { connect } from 'react-redux'
import { Action, Dispatch } from 'redux'

import fetchAllApps from '../../../actions/apps/fetch-all-apps'
import { State } from '../../../states'
import SupportedApps from './SupportedApps'

const enchance = connect(
  (state: State) => ({
    apps: state.apps.apps,
  }),
  (dispatch: Dispatch<Action>) => ({
    loadApps: () => dispatch(fetchAllApps()),
  }),
)

export default enchance(SupportedApps)
