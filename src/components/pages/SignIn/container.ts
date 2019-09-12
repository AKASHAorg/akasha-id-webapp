import { connect } from 'react-redux'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { Action, Dispatch } from 'redux'
import { reduxForm } from 'redux-form'

import startSignIn from '../../../actions/landing/start-sign-in'
import { State } from '../../../states'
import { SignInFormData } from '../../../types/users'
import SignIn, { SignInMatch, SignInProps } from './SignIn'

const enchance = connect(
  (state: State, props: RouteComponentProps<SignInMatch>) => {
    const user = state.landing.users.find(u => u.id === props.match.params.userid)

    return {
      username: user ? user.name : '',
    }
  },
  (dispatch: Dispatch<Action>) => ({}),
)

const withForm = reduxForm<SignInFormData, SignInProps, string>({
  form: 'sign-in',
  onSubmit: async (formData, dispatch, props) => {
    await dispatch(startSignIn(props.match.params.userid, formData))
  },
})

export default withRouter(enchance(withForm(SignIn)))
