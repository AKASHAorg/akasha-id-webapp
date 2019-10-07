import { connect } from 'react-redux'
import { Action, Dispatch } from 'redux'
import { reduxForm } from 'redux-form'

import startUpdateAccount from '../../../../../actions/account/start-update-account'
import { State } from '../../../../../states'
import { AccountFormData } from '../../../../../types/account'
import AccountForm from './AccountForm'

const enchance = connect(
  (state: State) => ({
    initialValues: {
      name: state.account.name,
    },
  }),
  (dispatch: Dispatch<Action>) => ({}),
)

const withForm = reduxForm<AccountFormData, {}, string>({
  form: 'account',
  onSubmit: (formData, dispatch) => {
    dispatch(startUpdateAccount(formData))
  },
})

export default enchance(withForm(AccountForm))
