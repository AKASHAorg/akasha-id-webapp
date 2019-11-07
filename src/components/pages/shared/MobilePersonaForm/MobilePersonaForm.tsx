import Button from '@akashaproject/design-system/dist/components/Button'
import React from 'react'
import { Field, InjectedFormProps } from 'redux-form'

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
  showPrompt?: 'avatar' | 'coverImage'
  onSubmit: (formData: PersonaData) => void
}

const profileNameIsRequired = isRequired('Profile name is required')

const MobilePersonaForm: React.FC<
  MobilePersonaFormProps & InjectedFormProps<PersonaData, MobilePersonaFormProps, string>
> = ({ handleSubmit, reset, edit, showPrompt }) => {
  return (
    <>
      <StyledPageContainer>
        <FormContainer>
          <FormField>
            <Field
              name="personaName"
              label="Persona name"
              placeholder="Type Persona name"
              component={Input}
              validate={profileNameIsRequired}
              maxLength={256}
            />
          </FormField>
          <FormField>
            <Field
              name="avatar"
              label="Persona photo"
              component={ImageField}
              openDialog={showPrompt === 'avatar'}
              container={AvatarContainer}
            />
          </FormField>
          <FormField>
            <Field
              name="coverImage"
              label="Cover image"
              component={ImageField}
              openDialog={showPrompt === 'coverImage'}
              container={CoverImageContainer}
            />
          </FormField>
          <FormField>
            <Field
              name="name"
              label="Name"
              placeholder="Type name"
              component={Input}
              validate={() => undefined}
              maxLength={256}
            />
          </FormField>
          <FormField>
            <Field
              name="description"
              label="About"
              placeholder="Something about you"
              component={Input}
              validate={() => undefined}
              maxLength={256}
            />
          </FormField>
          <FormField>
            <Field
              name="email"
              label="Email Address"
              placeholder="Type your email"
              component={Input}
              validate={() => undefined}
            />
          </FormField>
          <FormField>
            <Field
              name="ethAddress"
              label="Phone Number"
              placeholder="Type phone number"
              component={Input}
              validate={() => undefined}
            />
          </FormField>
          <FormField>
            <Field
              name="address"
              label="Location"
              placeholder="Your location"
              component={Input}
              validate={() => undefined}
            />
          </FormField>
        </FormContainer>
      </StyledPageContainer>

      <BottomContainer>
        <Button fullWidth={true} buttonType="primary" onClick={handleSubmit}>
          {!edit && 'Create Persona'}
          {edit && 'Save Changes'}
        </Button>
      </BottomContainer>
    </>
  )
}

export default MobilePersonaForm
