import { connect } from 'react-redux'
import deleteProfile from '../../../actions/delete-profile'
import logOut from '../../../actions/log-out'
import updateProfile from '../../../actions/update-profile'
import { State } from '../../../states'
import Profile from './Profile'

const enchance = connect(
  (state: State) => ({
    loggedIn: state.landing.loggedIn,
    login: state.profile.login,
    firstName: state.profile.firstName,
    lastName: state.profile.lastName,
    password: state.profile.password,
  }),
  dispatch => ({
    onLogOut: () => dispatch(logOut()),
    onDeleteProfile: () => dispatch(deleteProfile()),
    onUpdateProfile: (login: string, firstName: string, lastName: string, password: string) =>
      dispatch(updateProfile(login, firstName, lastName, password)),
  }),
)

export default enchance(Profile)
