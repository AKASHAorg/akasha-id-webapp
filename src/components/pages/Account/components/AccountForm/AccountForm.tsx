import Button from '@akashaproject/design-system/dist/components/Button'
import React from 'react'
import { Field, InjectedFormProps } from 'redux-form'

import { AccountFormData } from '../../../../../types/account'
import isRequired from '../../../../../validators/is-required'
import { Input } from '../../../../shared/WithLabel'
import { AccountHeader, ButtonContainer, FieldContainer } from './StyledAccountForm'

const nameIsRequired = isRequired('Username cannot be empty')
const passwordIsRequired = isRequired('Password cannot be empty')
const passwordConfirmationIsRequired = (value: string, values: { newPassword: string }) =>
  value && values.newPassword === value ? undefined : 'Password confirmation is incorrect'

const Account: React.FC<InjectedFormProps<AccountFormData, {}, string>> = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <AccountHeader>Account Settings</AccountHeader>
      <FieldContainer>
        <Field
          name="name"
          label="Username"
          placeholder=""
          component={Input}
          validate={nameIsRequired}
        />
      </FieldContainer>

      <FieldContainer>
        <Field
          name="oldPassword"
          label="Old password"
          placeholder=""
          component={Input}
          type="password"
          validate={passwordIsRequired}
        />
      </FieldContainer>

      <FieldContainer>
        <Field
          name="newPassword"
          label="New password"
          placeholder=""
          component={Input}
          type="password"
          validate={passwordIsRequired}
        />
      </FieldContainer>

      <FieldContainer>
        <Field
          name="confirmPassword"
          label="Confirm new password"
          placeholder=""
          component={Input}
          type="password"
          validate={passwordConfirmationIsRequired}
        />
      </FieldContainer>

      <ButtonContainer>
        <Button buttonType="primary" onClick={handleSubmit}>
          Update Settings
        </Button>
      </ButtonContainer>
    </form>
  )
}

export default Account
