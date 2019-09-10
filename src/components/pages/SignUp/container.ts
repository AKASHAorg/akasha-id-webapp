import { connect } from 'react-redux'
import { Action } from 'redux'
import { reduxForm } from 'redux-form'
import { ThunkDispatch } from 'redux-thunk'

import signUp from '../../../actions/sign-up'
import { State } from '../../../states'
import { SignUpFormData } from '../../../types/users'
import SignUp from './SignUp'

const enchance = connect(
  () => ({}),
  (dispatch: ThunkDispatch<State, void, Action>) => ({}),
)

const withForm = reduxForm<SignUpFormData, {}, string>({
  form: 'sign-up',
  onSubmit: async (formData, dispatch) => {
    await dispatch(signUp(formData))
  },
})

export default enchance(withForm(SignUp))
