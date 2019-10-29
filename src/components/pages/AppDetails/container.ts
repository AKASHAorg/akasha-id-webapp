import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Action, Dispatch } from 'redux'

import fetchClaim from '../../../actions/app-details/fetch-claim'
import startRemoveApp from '../../../actions/app-details/start-remove-app'
import fetchProfile from '../../../actions/profile/fetch-profile'
import { State } from '../../../states'
import AppDetails from './AppDetails'

const enchance = connect(
  (state: State) => ({
    app: state.appDetails.app,
    userName: state.account.name,
    profile: state.profile,
    claim: state.appDetails.claim,
    redirect: state.appDetails.redirectToApps,
  }),
  (dispatch: Dispatch<Action>) => ({
    fetchClaim: (token: string) => dispatch(fetchClaim(token)),
    fetchProfile: () => dispatch(fetchProfile('123')),
    startRemoveApp: () => dispatch(startRemoveApp()),
  }),
)

export default withRouter(enchance(AppDetails))
