import Button from '@akashaproject/design-system/dist/components/Button'
import React from 'react'
import { Field, InjectedFormProps } from 'redux-form'
import styled from 'styled-components'

import { PasswordFormData } from '../../../../../types/users'
import isRequired from '../../../../../validators/is-required'
import { Input } from '../../../../shared/WithLabel'
import { InputWithLabelProps } from '../../../../shared/WithLabel/Input'

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

const passwordIsRequired = isRequired('Password cannot be empty')

const PasswordForm: React.FC<InjectedFormProps<PasswordFormData, {}, string>> = ({
  handleSubmit,
}) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Field
          name="oldPassword"
          label="Old password"
          placeholder="Old password"
          type="password"
          component={FormRow}
          validate={passwordIsRequired}
        />
        <Field
          name="newPassword"
          label="New password"
          placeholder="New password"
          type="password"
          component={FormRow}
          validate={passwordIsRequired}
        />
      </form>
      <StyledRow>
        <StyledButton buttonType="primary" onClick={handleSubmit}>
          Update password
        </StyledButton>
      </StyledRow>
    </>
  )
}

export default PasswordForm
