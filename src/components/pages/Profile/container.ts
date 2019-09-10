import { connect } from 'react-redux'
import { Action } from 'redux'
import { ThunkDispatch } from 'redux-thunk'

import loadProfile from '../../../actions/load-profile'
import { State } from '../../../states'
import Profile from './Profile'

const enchance = connect(
  (state: State) => ({
    userId: state.profile.userId,
    signedIn: state.profile.signedIn,
  }),
  (dispatch: ThunkDispatch<State, void, Action>) => ({
    loadProfile: () => dispatch(loadProfile()),
  }),
)

export default enchance(Profile)
