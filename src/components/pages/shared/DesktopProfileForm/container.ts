import { connect } from 'react-redux'
import { Action, Dispatch } from 'redux'
import { reduxForm } from 'redux-form'

import startDeleteAccount from '../../../../actions/account/start-delete-account'
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
    onDeleteProfile: () => dispatch(startDeleteAccount()),
  }),
)

const withForm = reduxForm<ProfileData, DesktopProfileFormProps, string>({
  form: 'profile',
  enableReinitialize: true,
  onSubmit: (formData, dispatch, props) => {
    props.onSubmit(formData)
  },
})

export default enchance(withForm(DesktopProfileForm))
