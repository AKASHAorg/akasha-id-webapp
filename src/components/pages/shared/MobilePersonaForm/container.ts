import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'

import { State } from '../../../../states'
import { PersonaData } from '../../../../types/users'
import MobilePersonaForm, { MobilePersonaFormProps } from './MobilePersonaForm'

const enchance = connect((state: State) => ({
  name: state.account.name,
  initialValues: {
    ...state.persona,
  },
}))

const withForm = reduxForm<PersonaData, MobilePersonaFormProps, string>({
  form: 'persona',
  enableReinitialize: true,
  onSubmit: (formData, dispatch, props) => {
    props.onSubmit(formData)
  },
})

export default enchance(withForm(MobilePersonaForm))
