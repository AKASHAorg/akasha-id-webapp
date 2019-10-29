import { connect } from 'react-redux'
import { Action, Dispatch } from 'redux'

import setProfile from '../../../actions/profile/set-profile'
import startCreateProfile from '../../../actions/profile/start-create-profile'
import { State } from '../../../states'
import { ProfileData } from '../../../types/users'
import CreateProfile from './CreateProfile'

const enchance = connect(
  (state: State) => ({
    redirect: state.profile.redirect,
  }),
  (dispatch: Dispatch<Action>) => ({
    resetProfile: () => dispatch(setProfile()),
    onSubmit: (formData: ProfileData) => {
      dispatch(startCreateProfile(formData))
    },
  }),
)

export default enchance(CreateProfile)
