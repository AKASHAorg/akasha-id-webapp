import { connect } from 'react-redux'
import { Action, Dispatch } from 'redux'

import fetchProfile from '../../../actions/profile/fetch-profile'
import startUpdateProfile from '../../../actions/profile/start-update-profile'
import { State } from '../../../states'
import { ProfileData } from '../../../types/users'
import EditProfile, { EditProfileProps } from './EditProfile'

const enchance = connect(
  (state: State, props) => ({
    redirect: state.profile.redirect,
  }),
  (dispatch: Dispatch<Action>) => ({
    loadProfile: (profileId: string) => dispatch(fetchProfile(profileId)),
    onSubmit: (formData: ProfileData) => {
      dispatch(startUpdateProfile(formData))
    },
  }),
)

export default enchance(EditProfile)
