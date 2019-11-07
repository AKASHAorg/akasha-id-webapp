import Button from '@akashaproject/design-system/dist/components/Button'
import React from 'react'
import { Field, InjectedFormProps } from 'redux-form'

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
  return (
    <PageContainer>
      <form onSubmit={handleSubmit}>
        <UserNameHeader>{name}</UserNameHeader>
        <DateContainer>
          Created on 22 July 2019
          <DateDivider>&bull;</DateDivider>
          Last update 8 September 2019
        </DateContainer>

        <ImageContainer>
          <Field name="avatar" label="Avatar" component={ImageField} container={PhotoContainer} />
          <RowDivider />
          <Field
            name="coverImage"
            label="Cover image"
            component={ImageField}
            container={PictureContainer}
          />
        </ImageContainer>

        <NameContainer>
          <Field
            name="name"
            label="Name"
            placeholder="Type your name"
            component={Input}
            validate={() => undefined}
            maxLength={256}
          />
          <RowDivider />
          <Field
            name="email"
            label="Email"
            placeholder="email@email.com"
            component={Input}
            validate={() => undefined}
          />
        </NameContainer>

        <AboutContainer>
          <Field
            name="description"
            label="About me"
            component={Textarea}
            validate={() => undefined}
            resize="none"
            maxLength={256}
          />
          <AboutFootnote>The About section could have max. 256 characters.</AboutFootnote>
        </AboutContainer>

        <ButtonContainer>
          <StyledButton buttonType="primary" onClick={handleSubmit}>
            Create ID
          </StyledButton>
        </ButtonContainer>
      </form>

      <Divider />

      <DeleteContainer>
        <DeleteTextContainer>
          <DeleteHeader>Delete Persona</DeleteHeader>
          <DeleteText>Once you delete your persona, there is no going back.</DeleteText>
          <DeleteText>Please be certain.</DeleteText>
        </DeleteTextContainer>
        <Button buttonType="primary" onClick={onDeletePersona}>
          Delete Persona
        </Button>
      </DeleteContainer>
    </PageContainer>
  )
}

export default DesktopPersonaForm
