import { connect } from 'react-redux'
import { Action, Dispatch } from 'redux'
import { reduxForm } from 'redux-form'

import startDeleteProfile from '../../../../actions/profile/start-delete-profile'
import startUpdateProfile from '../../../../actions/profile/start-update-profile'
import { State } from '../../../../states'
import { ProfileData } from '../../../../types/users'
import DesktopProfileForm, { DesktopProfileFormProps } from './DesktopProfileForm'

const enchance = connect(
  (state: State) => ({
    name: state.account.name,
    initialValues: {
      ...state.profile,
    },
  }),
  (dispatch: Dispatch<Action>) => ({
    onDeleteProfile: () => dispatch(startDeleteProfile()),
  }),
)

const withForm = reduxForm<ProfileData, DesktopProfileFormProps, string>({
  form: 'profile',
  enableReinitialize: true,
  onSubmit: (formData, dispatch) => {
    dispatch(startUpdateProfile(formData))
  },
})

export default enchance(withForm(DesktopProfileForm))
