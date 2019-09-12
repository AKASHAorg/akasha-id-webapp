import { connect } from 'react-redux'
import { Action, Dispatch } from 'redux'
import { reduxForm } from 'redux-form'

import startUpdatePassword from '../../../../../actions/profile/start-update-password'
import { State } from '../../../../../states'
import { PasswordFormData } from '../../../../../types/users'
import PasswordForm from './PasswordForm'

const enchance = connect(
  (state: State) => ({}),
  (dispatch: Dispatch<Action>) => ({}),
)

const withForm = reduxForm<PasswordFormData, {}, string>({
  form: 'password',
  onSubmit: (formData, dispatch) => {
    dispatch(startUpdatePassword(formData))
  },
})

export default enchance(withForm(PasswordForm))
