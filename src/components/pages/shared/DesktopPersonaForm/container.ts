import { connect } from 'react-redux'
import { Action, Dispatch } from 'redux'
import { reduxForm } from 'redux-form'

import startDeleteAccount from '../../../../actions/account/start-delete-account'
import { State } from '../../../../states'
import { PersonaData } from '../../../../types/users'
import DesktopPersonaForm, { DesktopPersonaFormProps } from './DesktopPersonaForm'

const enchance = connect(
  (state: State) => ({
    name: state.account.name,
    initialValues: {
      ...state.persona,
    },
  }),
  (dispatch: Dispatch<Action>) => ({
    onDeletePersona: () => dispatch(startDeleteAccount()),
  }),
)

const withForm = reduxForm<PersonaData, DesktopPersonaFormProps, string>({
  form: 'persona',
  enableReinitialize: true,
  onSubmit: (formData, dispatch, props) => {
    props.onSubmit(formData)
  },
})

export default enchance(withForm(DesktopPersonaForm))
