import { connect } from 'react-redux'
import { Action } from 'redux'
import { ThunkDispatch } from 'redux-thunk'

import deleteProfile from '../../../actions/delete-profile'
import logOut from '../../../actions/log-out'
import updateProfile from '../../../actions/update-profile'
import { State } from '../../../states'
import Profile from './Profile'

const enchance = connect(
  (state: State) => ({
    login: state.profile.login,
    firstName: state.profile.firstName,
    lastName: state.profile.lastName,
    password: state.profile.password,
  }),
  (dispatch: ThunkDispatch<State, void, Action>) => ({
    onLogOut: () => dispatch(logOut()),
    onDeleteProfile: () => dispatch(deleteProfile()),
    onUpdateProfile: (login: string, firstName: string, lastName: string, password: string) =>
      dispatch(updateProfile(login, firstName, lastName, password)),
  }),
)

export default enchance(Profile)
