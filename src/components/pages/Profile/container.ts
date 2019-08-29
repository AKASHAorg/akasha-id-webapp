import { connect } from 'react-redux'
import { Action } from 'redux'
import { ThunkDispatch } from 'redux-thunk'

import deleteProfile from '../../../actions/delete-profile'
import signOut from '../../../actions/sign-out'
import updateProfile from '../../../actions/update-profile'
import { State } from '../../../states'
import Profile from './Profile'

const enchance = connect(
  (state: State) => ({
    username: state.profile.username,
    firstName: state.profile.firstName,
    lastName: state.profile.lastName,
    password: state.profile.password,
  }),
  (dispatch: ThunkDispatch<State, void, Action>) => ({
    onDeleteProfile: () => dispatch(deleteProfile()),
    onUpdateProfile: (firstName: string, lastName: string, password: string) =>
      dispatch(updateProfile(firstName, lastName, password)),
  }),
)

export default enchance(Profile)
