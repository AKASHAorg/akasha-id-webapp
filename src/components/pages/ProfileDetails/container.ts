import { connect } from 'react-redux'
import { Action, Dispatch } from 'redux'

import fetchApps from '../../../actions/apps/fetch-apps'
import fetchProfile from '../../../actions/profile/fetch-profile'
import { State } from '../../../states'
import ProfileDetails from './ProfileDetails'

const enchance = connect(
  (state: State) => ({
    name: state.account.name,
    givenName: state.profile.givenName,
    about: state.profile.about,
    email: state.profile.email,
    telephone: state.profile.telephone,
    address: state.profile.location,
    apps: state.apps.apps,
    photo: state.profile.photo,
    picture: state.profile.picture,
  }),
  (dispatch: Dispatch<Action>) => ({
    loadProfile: () => dispatch(fetchProfile()),
    loadApps: () => dispatch(fetchApps()),
  }),
)

export default enchance(ProfileDetails)
