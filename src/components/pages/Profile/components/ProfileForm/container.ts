import { connect } from 'react-redux'
import { Action, Dispatch } from 'redux'
import { reduxForm } from 'redux-form'

import startDeleteProfile from '../../../../../actions/profile/start-delete-profile'
import startUpdateProfile from '../../../../../actions/profile/start-update-profile'
import { State } from '../../../../../states'
import { ProfileFormData } from '../../../../../types/users'
import ProfileForm, { ProfileFormProps } from './ProfileForm'

const enchance = connect(
  (state: State) => ({
    initialValues: {
      ...state.profile,
    },
  }),
  (dispatch: Dispatch<Action>) => ({
    onDeleteProfile: () => dispatch(startDeleteProfile()),
  }),
)

const withForm = reduxForm<ProfileFormData, ProfileFormProps, string>({
  form: 'profile',
  enableReinitialize: true,
  onSubmit: (formData, dispatch) => {
    dispatch(startUpdateProfile(formData))
  },
})

export default enchance(withForm(ProfileForm))
