import Button from '@akashaproject/design-system/dist/components/Button'
import React from 'react'
import { Field, InjectedFormProps } from 'redux-form'
import styled from 'styled-components'

import { ProfileFormData } from '../../../../../types/users'
import isRequired from '../../../../../validators/is-required'
import { Input } from '../../../../shared/WithLabel'
import { InputWithLabelProps } from '../../../../shared/WithLabel/Input'

export interface ProfileFormProps {
  onDeleteProfile: () => void
}

const StyledRow = styled.div`
  width: 300px;
`

const StyledButton = styled(Button)`
  :not(:last-child) {
    margin-right: 8px;
  }
`

const FormRow = (props: InputWithLabelProps) => {
  return (
    <StyledRow>
      <Input {...props} />
    </StyledRow>
  )
}

const nameIsRequired = isRequired('Name cannot be empty')

const ProfileForm: React.FC<
  ProfileFormProps & InjectedFormProps<ProfileFormData, ProfileFormProps, string>
> = ({ handleSubmit, onDeleteProfile }) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Field
          name="addressLocality"
          label="Address locality"
          placeholder="Address locality"
          type="text"
          component={FormRow}
        />
        <Field
          name="addressRegion"
          label="Address region"
          placeholder="Address region"
          type="text"
          component={FormRow}
        />
        <Field
          name="postalCode"
          label="Postal code"
          placeholder="Postal code"
          type="text"
          component={FormRow}
        />
        <Field
          name="streetAddress"
          label="Street address"
          placeholder="Street address"
          type="text"
          component={FormRow}
        />
        <Field name="email" label="E-mail" placeholder="E-mail" type="text" component={FormRow} />
        <Field name="photo" label="Photo" placeholder="Photo" type="text" component={FormRow} />
        <Field
          name="picture"
          label="Picture"
          placeholder="Picture"
          type="text"
          component={FormRow}
        />
        <Field
          name="jobTitle"
          label="Job title"
          placeholder="Job title"
          type="text"
          component={FormRow}
        />
        <Field
          name="name"
          label="Name"
          placeholder="Name"
          type="text"
          component={FormRow}
          validate={nameIsRequired}
        />
        <Field
          name="givenName"
          label="Given name"
          placeholder="Given name"
          type="text"
          component={FormRow}
        />
        <Field
          name="familyName"
          label="Family name"
          placeholder="Family name"
          type="text"
          component={FormRow}
        />
        <Field
          name="birthDate"
          label="Birth date"
          placeholder="Birth date"
          type="text"
          component={FormRow}
        />
        <Field
          name="telephone"
          label="Telephone"
          placeholder="Telephone"
          type="text"
          component={FormRow}
        />
        <Field name="url" label="Url" placeholder="Url" type="text" component={FormRow} />
      </form>
      <StyledRow>
        <StyledButton buttonType="alert" onClick={onDeleteProfile}>
          Delete profile
        </StyledButton>

        <StyledButton buttonType="primary" onClick={handleSubmit}>
          Update profile
        </StyledButton>
      </StyledRow>
    </>
  )
}

export default ProfileForm
