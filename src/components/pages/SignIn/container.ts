import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Action } from 'redux'
import { reduxForm } from 'redux-form'
import { ThunkDispatch } from 'redux-thunk'

import setUserId from '../../../actions/set-user-id'
import signIn from '../../../actions/sign-in'
import { State } from '../../../states'
import { SignInFormData } from '../../../types/users'
import SignIn, { SignInProps } from './SignIn'

const enchance = connect(
  (state: State) => {
    const user = state.landing.users.find(u => u.id === state.landing.userId)

    return {
      username: user ? user.name : '',
    }
  },
  (dispatch: ThunkDispatch<State, void, Action>) => ({
    setUserId: (userId: string) => dispatch(setUserId(userId)),
  }),
)

const withForm = reduxForm<SignInFormData, SignInProps, string>({
  form: 'sign-in',
  onSubmit: async (formData, dispatch) => {
    await dispatch(signIn(formData))
  },
})

export default withRouter(enchance(withForm(SignIn)))
