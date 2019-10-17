import { connect } from 'react-redux'
import { Action, Dispatch } from 'redux'

import fetchApps from '../../../actions/apps/fetch-apps'
import startDeleteProfile from '../../../actions/profile/start-delete-profile'
import { State } from '../../../states'
import DeleteProfileModal from './DeleteProfileModal'

const enchance = connect(
  (state: State) => ({
    name: state.account.name,
    apps: state.apps.apps,
  }),
  (dispatch: Dispatch<Action>) => ({
    loadApps: () => dispatch(fetchApps()),
    onDeleteProfile: () => dispatch(startDeleteProfile()),
  }),
)

export default enchance(DeleteProfileModal)
