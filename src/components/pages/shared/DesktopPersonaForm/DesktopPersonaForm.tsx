import Button from '@akashaproject/design-system/dist/components/Button'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Field, InjectedFormProps } from 'redux-form'

import { personaForm, translation } from '../../../../consts/i18n'
import { PERSONA_FORM } from '../../../../consts/i18n-ns'
import { PersonaData } from '../../../../types/users'
import { ImageField } from '../../../shared/ImageField'
import { Input, Textarea } from '../../../shared/WithLabel'
import {
  AboutContainer,
  AboutFootnote,
  ButtonContainer,
  DateContainer,
  DateDivider,
  DeleteContainer,
  DeleteHeader,
  DeleteText,
  DeleteTextContainer,
  Divider,
  ImageContainer,
  NameContainer,
  PageContainer,
  PhotoContainer,
  PictureContainer,
  RowDivider,
  StyledButton,
  UserNameHeader,
} from './Styled'

export interface DesktopPersonaFormProps {
  name: string
  onSubmit: (formData: PersonaData) => void
  onDeletePersona: () => void
}

const DesktopPersonaForm: React.FC<
  DesktopPersonaFormProps & InjectedFormProps<PersonaData, DesktopPersonaFormProps, string>
> = ({ name, handleSubmit, onDeletePersona, reset }) => {
  const { t } = useTranslation(PERSONA_FORM)

  return (
    <PageContainer>
      <form onSubmit={handleSubmit}>
        <UserNameHeader>{name}</UserNameHeader>
        <DateContainer>
          {t(personaForm.createdDate, { createdDate: '22 July 2019' })}
          <DateDivider>&bull;</DateDivider>
          {t(personaForm.updatedDate, { updatedDate: '8 September 2019' })}
        </DateContainer>

        <ImageContainer>
          <Field
            name="avatar"
            label={t(translation.attributes.avatar)}
            component={ImageField}
            container={PhotoContainer}
          />
          <RowDivider />
          <Field
            name="coverImage"
            label={t(translation.attributes.coverImage)}
            component={ImageField}
            container={PictureContainer}
          />
        </ImageContainer>

        <NameContainer>
          <Field
            name="name"
            label={t(translation.attributes.avatar)}
            placeholder={t(personaForm.name.placeholder)}
            component={Input}
            validate={() => undefined}
            maxLength={256}
          />
          <RowDivider />
          <Field
            name="email"
            label={t(translation.attributes.email)}
            placeholder={t(personaForm.email.placeholder)}
            component={Input}
            validate={() => undefined}
          />
        </NameContainer>

        <AboutContainer>
          <Field
            name="description"
            label={t(translation.attributes.description)}
            component={Textarea}
            validate={() => undefined}
            resize="none"
            maxLength={256}
          />
          <AboutFootnote>{t(personaForm.aboutFootnote)}</AboutFootnote>
        </AboutContainer>

        <ButtonContainer>
          <StyledButton buttonType="primary" onClick={handleSubmit}>
            {t(personaForm.createId)}
          </StyledButton>
        </ButtonContainer>
      </form>

      <Divider />

      <DeleteContainer>
        <DeleteTextContainer>
          <DeleteHeader>{t(personaForm.deletePersona.header)}</DeleteHeader>
          <DeleteText>{t(personaForm.deletePersona.text[0])}</DeleteText>
          <DeleteText>{t(personaForm.deletePersona.text[1])}</DeleteText>
        </DeleteTextContainer>
        <Button buttonType="primary" onClick={onDeletePersona}>
          {t(personaForm.deletePersona.button)}
        </Button>
      </DeleteContainer>
    </PageContainer>
  )
}

export default DesktopPersonaForm
