import { connect } from 'react-redux'
import { Action, Dispatch } from 'redux'
import { formValueSelector, reduxForm } from 'redux-form'

import acceptApp from '../../../../../actions/apps/accept-app'
import declineApp from '../../../../../actions/apps/decline-app'
import fetchPersonas from '../../../../../actions/personas/fetch-personas'
import { State } from '../../../../../states'
import { AddAppFormData } from '../../../../../types/apps'
import RegisterAppMobileView, { RegisterAppMobileViewProps } from './RegisterAppMobileView'

const personaSelector = formValueSelector('register-app')

const enchance = connect(
  (state: State) => {
    const attributes =
      state.apps.appRequest && state.apps.appRequest.attributes
        ? state.apps.appRequest.attributes
        : []

    const attributeInitialValues = Object.fromEntries(
      attributes.map(attribute => [attribute, true]),
    )

    return {
      attributes,
      step: state.apps.addAppModalStep,
      personas: state.personas.personas,
      name:
        state.apps.appRequest && state.apps.appRequest.appInfo
          ? state.apps.appRequest.appInfo.name
          : '',
      description:
        state.apps.appRequest && state.apps.appRequest.appInfo
          ? state.apps.appRequest.appInfo.description
          : '',
      icon:
        state.apps.appRequest && state.apps.appRequest.appInfo
          ? state.apps.appRequest.appInfo.icon
          : '',
      url:
        state.apps.appRequest && state.apps.appRequest.appInfo
          ? state.apps.appRequest.appInfo.url
          : '',
      nonce: state.apps.appRequest ? state.apps.appRequest.nonce : 0,
      selectedPersona: personaSelector(state, 'personaId'),
      initialValues: {
        personaId: undefined,
        attributes: attributeInitialValues as any,
      },
    }
  },
  (dispatch: Dispatch<Action>) => ({
    loadPersonas: () => dispatch(fetchPersonas()),
    onClose: () => dispatch(declineApp()),
  }),
)

const withForm = reduxForm<AddAppFormData, RegisterAppMobileViewProps, string>({
  form: 'register-app',
  enableReinitialize: true,
  validate: values => {
    const errors: any = {}

    if (values.personaId === undefined) {
      errors.personaId = 'Select a persona'
    }

    return errors
  },
  onSubmit: (formData, dispatch) => {
    dispatch(acceptApp(formData))
  },
})

export default enchance(withForm(RegisterAppMobileView))
