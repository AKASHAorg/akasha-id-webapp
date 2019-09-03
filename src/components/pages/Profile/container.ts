import { connect } from 'react-redux'
import { Action } from 'redux'
import { ThunkDispatch } from 'redux-thunk'

import deleteProfile from '../../../actions/delete-profile'
import updateProfile from '../../../actions/update-profile'
import { State } from '../../../states'
import Profile from './Profile'

const enchance = connect(
  (state: State) => ({
    username: state.profile.username,
    password: state.profile.password,
    usernameError: state.profile.usernameError,
    passwordError: state.profile.passwordError,
  }),
  (dispatch: ThunkDispatch<State, void, Action>) => ({
    onDeleteProfile: () => dispatch(deleteProfile()),
    onUpdateProfile: (username: string, password: string) =>
      dispatch(updateProfile(username, password)),
  }),
)

export default enchance(Profile)
