import { connect } from 'react-redux'
import { Action, Dispatch } from 'redux'

import fetchProfile from '../../../actions/profile/fetch-profile'
import showExportProfileModal from '../../../actions/profile/show-export-profile-modal'
import { State } from '../../../states'
import Profile from './Profile'

const enchance = connect(
  (state: State) => ({
    userId: state.profile.userId,
  }),
  (dispatch: Dispatch<Action>) => ({
    exportProfile: () => dispatch(showExportProfileModal()),
    loadProfile: () => dispatch(fetchProfile()),
  }),
)

export default enchance(Profile)
