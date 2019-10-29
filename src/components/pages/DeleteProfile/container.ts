import { connect } from 'react-redux'
import { Action, Dispatch } from 'redux'

import fetchProfile from '../../../actions/profile/fetch-profile'
import { State } from '../../../states'
import DeleteProfile from './DeleteProfile'

const enchance = connect(
  (state: State) => ({
    redirect: state.profile.redirect,
  }),
  (dispatch: Dispatch<Action>) => ({
    loadProfile: (profileId: string) => dispatch(fetchProfile(profileId)),
  }),
)

export default enchance(DeleteProfile)
