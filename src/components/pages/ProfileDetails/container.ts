import { connect } from 'react-redux'
import { Action, Dispatch } from 'redux'

import fetchApps from '../../../actions/apps/fetch-apps'
import fetchProfile from '../../../actions/profile/fetch-profile'
import setRedirect from '../../../actions/profile/set-redirect'
import { State } from '../../../states'
import ProfileDetails from './ProfileDetails'

const enchance = connect(
  (state: State) => ({
    profileName: state.profile.profileName,
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
    loadProfile: (profileId: string) => dispatch(fetchProfile(profileId)),
    loadApps: () => dispatch(fetchApps()),
    unsetRedirect: () => dispatch(setRedirect(false)),
  }),
)

export default enchance(ProfileDetails)
