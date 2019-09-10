import { connect } from 'react-redux'
import { Action } from 'redux'
import { reduxForm } from 'redux-form'
import { ThunkDispatch } from 'redux-thunk'

import deleteProfile from '../../../../../actions/delete-profile'
import updateProfile from '../../../../../actions/update-profile'
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
  (dispatch: ThunkDispatch<State, void, Action>) => ({
    onDeleteProfile: () => dispatch(deleteProfile()),
  }),
)

const withForm = reduxForm<ProfileFormData, ProfileFormProps, string>({
  form: 'profile',
  enableReinitialize: true,
  onSubmit: (formData, dispatch) => {
    dispatch(updateProfile(formData))
  },
})

export default enchance(withForm(ProfileForm))
