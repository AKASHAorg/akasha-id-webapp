import Button from '@akashaproject/design-system/dist/components/Button'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Field, InjectedFormProps } from 'redux-form'

import { personaForm, translation } from '../../../../consts/i18n'
import { PERSONA_FORM } from '../../../../consts/i18n-ns'
import { PersonaData } from '../../../../types/users'
import isRequired from '../../../../validators/is-required'
import { ImageField } from '../../../shared/ImageField'
import { Input } from '../../../shared/WithLabel'
import {
  AvatarContainer,
  BottomContainer,
  CoverImageContainer,
  FormContainer,
  FormField,
  StyledPageContainer,
} from './Styled'

export interface MobilePersonaFormProps {
  edit: boolean
  onSubmit: (formData: PersonaData) => void
}

const profileNameIsRequired = isRequired(personaForm.personaName.errorIsRequired)

const MobilePersonaForm: React.FC<
  MobilePersonaFormProps & InjectedFormProps<PersonaData, MobilePersonaFormProps, string>
> = ({ handleSubmit, reset, edit }) => {
  const { t } = useTranslation(PERSONA_FORM)

  return (
    <>
      <StyledPageContainer>
        <FormContainer>
          <FormField>
            <Field
              name="personaName"
              label={t(personaForm.personaName.label)}
              placeholder={t(personaForm.personaName.placeholder)}
              component={Input}
              validate={profileNameIsRequired}
              maxLength={256}
            />
          </FormField>
          <FormField>
            <Field
              name="avatar"
              label={t(translation.attributes.avatar)}
              component={ImageField}
              container={AvatarContainer}
            />
          </FormField>
          <FormField>
            <Field
              name="coverImage"
              label={t(translation.attributes.coverImage)}
              component={ImageField}
              container={CoverImageContainer}
            />
          </FormField>
          <FormField>
            <Field
              name="name"
              label={t(translation.attributes.name)}
              placeholder={t(personaForm.name.placeholder)}
              component={Input}
              validate={() => undefined}
              maxLength={256}
            />
          </FormField>
          <FormField>
            <Field
              name="description"
              label={t(translation.attributes.description)}
              placeholder={t(personaForm.description.placeholder)}
              component={Input}
              validate={() => undefined}
              maxLength={256}
            />
          </FormField>
          <FormField>
            <Field
              name="email"
              label={t(translation.attributes.email)}
              placeholder={t(personaForm.email.placeholder)}
              component={Input}
              validate={() => undefined}
            />
          </FormField>
          <FormField>
            <Field
              name="ethAddress"
              label={t(translation.attributes.ethAddress)}
              placeholder={t(personaForm.ethAddress.placeholder)}
              component={Input}
              validate={() => undefined}
            />
          </FormField>
          <FormField>
            <Field
              name="address"
              label={t(translation.attributes.address)}
              placeholder={t(personaForm.address.placeholder)}
              component={Input}
              validate={() => undefined}
            />
          </FormField>
        </FormContainer>
      </StyledPageContainer>

      <BottomContainer>
        <Button fullWidth={true} buttonType="primary" onClick={handleSubmit}>
          {!edit && t(personaForm.createPersona)}
          {edit && t(personaForm.saveChanges)}
        </Button>
      </BottomContainer>
    </>
  )
}

export default MobilePersonaForm
