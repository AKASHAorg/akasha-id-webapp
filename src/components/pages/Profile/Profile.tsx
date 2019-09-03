import Button from '@akashaproject/design-system/dist/components/Button'
import Input from '@akashaproject/design-system/dist/components/Input'
import React from 'react'
import { Field, WrappedFieldProps } from 'redux-form'
import styled from 'styled-components'

import { ProfileFormData } from '../../../types/users'
import isRequired from '../../../validators/is-required'
import WithLabel from '../../shared/WithLabel'

export interface ProfileProps {
  initialValues: Partial<ProfileFormData>
  handleSubmit: () => void
  onDeleteProfile: () => void
  onUpdateProfile: (newUsername: string, newPassword: string) => void
}

const StyledRow = styled.div`
  margin-top: 8px;
  width: 300px;
`

const StyledButton = styled(Button)`
  :not(:last-child) {
    margin-right: 8px;
  }
`

interface FormRowProps extends WrappedFieldProps {
  label: string
  placeholder: string
  type: string
}
const FormRow = ({ label, placeholder, input, type, meta: { touched, error } }: FormRowProps) => {
  return (
    <StyledRow>
      <WithLabel label={label} error={error}>
        <Input {...input} type={type} placeholder={placeholder} />
      </WithLabel>
    </StyledRow>
  )
}

const nameIsRequired = isRequired('Name cannot be empty')
const passwordIsRequired = isRequired('Password cannot be empty')

const Profile: React.FC<ProfileProps> = ({
  handleSubmit,
  onDeleteProfile,
  onUpdateProfile,
}: ProfileProps) => {
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="name"
        label="Name"
        placeholder="Name"
        type="text"
        component={FormRow}
        validate={nameIsRequired}
      />
      <Field
        name="password"
        label="Password"
        placeholder="Password"
        type="password"
        component={FormRow}
        validate={passwordIsRequired}
      />
      <StyledRow>
        <StyledButton buttonType="alert" onClick={() => onDeleteProfile()}>
          Delete profile
        </StyledButton>
        <StyledButton buttonType="primary" onClick={() => onUpdateProfile('a', 'b')}>
          Update profile
        </StyledButton>
      </StyledRow>
    </form>
  )
}

export default Profile
