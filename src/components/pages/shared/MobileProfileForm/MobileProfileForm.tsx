import Button from '@akashaproject/design-system/dist/components/Button'
import React from 'react'
import { Field, InjectedFormProps } from 'redux-form'

import { ProfileData } from '../../../../types/users'
import { ImageField } from '../../../shared/ImageField'
import { Input } from '../../../shared/WithLabel'
import {
  BottomContainer,
  FormContainer,
  FormField,
  PhotoContainer,
  PictureContainer,
  StyledPageContainer,
} from './Styled'

export interface MobileProfileFormProps {
  edit: boolean
}

const MobileProfileForm: React.FC<
  MobileProfileFormProps & InjectedFormProps<ProfileData, MobileProfileFormProps, string>
> = ({ handleSubmit, reset, edit }) => {
  return (
    <>
      <StyledPageContainer>
        <FormContainer>
          <FormField>
            <Field
              name="familyName"
              label="Persona name"
              placeholder="Type Persona name"
              component={Input}
              validate={() => undefined}
            />
          </FormField>
          <FormField>
            <Field
              name="photo"
              label="Profile photo"
              component={ImageField}
              container={PhotoContainer}
            />
          </FormField>
          <FormField>
            <Field
              name="photo"
              label="Cover image"
              component={ImageField}
              container={PictureContainer}
            />
          </FormField>
          <FormField>
            <Field
              name="givenName"
              label="Name"
              placeholder="Type name"
              component={Input}
              validate={() => undefined}
            />
          </FormField>
          <FormField>
            <Field
              name="about"
              label="About"
              placeholder="Something about you"
              component={Input}
              validate={() => undefined}
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
              name="telephone"
              label="Phone Number"
              placeholder="Type phone number"
              component={Input}
              validate={() => undefined}
            />
          </FormField>
          <FormField>
            <Field
              name="location"
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

export default MobileProfileForm
