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
      addressLocality: state.profile.addressLocality,
      addressRegion: state.profile.addressRegion,
      postalCode: state.profile.postalCode,
      streetAddress: state.profile.streetAddress,
      email: state.profile.email,
      photo: state.profile.photo,
      image: state.profile.image,
      jobTitle: state.profile.jobTitle,
      name: state.profile.name,
      givenName: state.profile.givenName,
      familyName: state.profile.familyName,
      birthDate: state.profile.birthDate,
      telephone: state.profile.telephone,
      url: state.profile.url,
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
