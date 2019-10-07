import { connect } from 'react-redux'
import { Action, Dispatch } from 'redux'

import fetchProfile from '../../../actions/profile/fetch-profile'
import { State } from '../../../states'
import Profile from './Profile'

const enchance = connect(
  (state: State) => ({
    userId: state.account.userId,
  }),
  (dispatch: Dispatch<Action>) => ({
    loadProfile: () => dispatch(fetchProfile()),
  }),
)

export default enchance(Profile)
