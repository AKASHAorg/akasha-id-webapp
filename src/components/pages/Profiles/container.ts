import { connect } from 'react-redux'
import { Action, Dispatch } from 'redux'

import fetchApps from '../../../actions/apps/fetch-apps'
import fetchProfile from '../../../actions/profile/fetch-profile'
import { State } from '../../../states'
import Profiles from './Profiles'

const enchance = connect(
  (state: State) => ({
    name: state.account.name,
    photo: state.profile.photo,
    about: state.profile.about,
    apps: state.apps.apps,
  }),
  (dispatch: Dispatch<Action>) => ({
    loadProfile: () => dispatch(fetchProfile()),
    loadApps: () => dispatch(fetchApps()),
  }),
)

export default enchance(Profiles)
