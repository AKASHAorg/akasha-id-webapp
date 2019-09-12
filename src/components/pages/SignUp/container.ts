import { connect } from 'react-redux'
import { Action, Dispatch } from 'redux'
import { reduxForm } from 'redux-form'

import startSignUp from '../../../actions/landing/start-sign-up'
import { SignUpFormData } from '../../../types/users'
import SignUp from './SignUp'

const enchance = connect(
  () => ({}),
  (dispatch: Dispatch<Action>) => ({}),
)

const withForm = reduxForm<SignUpFormData, {}, string>({
  form: 'sign-up',
  onSubmit: async (formData, dispatch) => {
    await dispatch(startSignUp(formData))
  },
})

export default enchance(withForm(SignUp))
