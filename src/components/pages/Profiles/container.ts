import { connect } from 'react-redux'
import { Action, Dispatch } from 'redux'

import fetchApps from '../../../actions/apps/fetch-apps'
import setRedirect from '../../../actions/profile/set-redirect'
import fetchProfiles from '../../../actions/profiles/fetch-profiles'
import { State } from '../../../states'
import Profiles from './Profiles'

const enchance = connect(
  (state: State) => ({
    profiles: state.profiles.profiles,
    apps: state.apps.apps,
  }),
  (dispatch: Dispatch<Action>) => ({
    loadProfiles: () => dispatch(fetchProfiles()),
    loadApps: () => dispatch(fetchApps()),
    unsetRedirect: () => dispatch(setRedirect(false)),
  }),
)

export default enchance(Profiles)
