import { connect } from 'react-redux'
import { Action } from 'redux'
import { reduxForm, submit } from 'redux-form'
import { ThunkDispatch } from 'redux-thunk'

import deleteProfile from '../../../actions/delete-profile'
import updateProfile from '../../../actions/update-profile'
import { State } from '../../../states'
import { ProfileFormData } from '../../../types/users'
import Profile, { ProfileProps } from './Profile'

const enchance = connect(
  (state: State) => ({
    initialValues: {
      name: state.profile.name,
      password: state.profile.password,
    },
  }),
  (dispatch: ThunkDispatch<State, void, Action>) => ({
    onDeleteProfile: () => dispatch(deleteProfile()),
    onUpdateProfile: () => dispatch(submit('profile')),
  }),
)

const withForm = reduxForm<ProfileFormData, ProfileProps, string>({
  form: 'profile',
  onSubmit: (formData, dispatch) => {
    dispatch(updateProfile(formData))
  },
})

export default enchance(withForm(Profile))
