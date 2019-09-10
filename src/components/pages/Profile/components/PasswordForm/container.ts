import { connect } from 'react-redux'
import { Action } from 'redux'
import { reduxForm } from 'redux-form'
import { ThunkDispatch } from 'redux-thunk'

import updatePassword from '../../../../../actions/update-password'
import { State } from '../../../../../states'
import { PasswordFormData } from '../../../../../types/users'
import PasswordForm from './PasswordForm'

const enchance = connect(
  (state: State) => ({}),
  (dispatch: ThunkDispatch<State, void, Action>) => ({}),
)

const withForm = reduxForm<PasswordFormData, {}, string>({
  form: 'password',
  onSubmit: (formData, dispatch) => {
    dispatch(updatePassword(formData))
  },
})

export default enchance(withForm(PasswordForm))
