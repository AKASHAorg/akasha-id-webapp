import Button from '@akashaproject/design-system/dist/components/Button'
import React from 'react'
import { Field, InjectedFormProps } from 'redux-form'

import { AccountFormData } from '../../../../../types/account'
import isRequired from '../../../../../validators/is-required'
import { Input } from '../../../../shared/WithLabel'
import {
  AccountHeader,
  ButtonContainer,
  FieldContainer,
  PasswordContainer,
  PasswordHeader,
} from './StyledAccountForm'

const nameIsRequired = isRequired('Username cannot be empty')
const passwordIsRequired = isRequired('Password cannot be empty')

const Account: React.FC<InjectedFormProps<AccountFormData, {}, string>> = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <AccountHeader>Account Information</AccountHeader>
      <FieldContainer>
        <Field
          name="name"
          label="Account name"
          placeholder=""
          component={Input}
          validate={nameIsRequired}
        />
      </FieldContainer>

      <PasswordContainer>
        <PasswordHeader>Change Password</PasswordHeader>

        <FieldContainer>
          <Field
            name="oldPassword"
            label="Old password"
            placeholder="Type old password"
            component={Input}
            type="password"
            validate={passwordIsRequired}
          />
        </FieldContainer>

        <FieldContainer>
          <Field
            name="newPassword"
            label="New password"
            placeholder="Type new password"
            component={Input}
            type="password"
            validate={passwordIsRequired}
          />
        </FieldContainer>

        <ButtonContainer>
          <Button buttonType="primary" onClick={handleSubmit}>
            Reset Password
          </Button>
        </ButtonContainer>
      </PasswordContainer>
    </form>
  )
}

export default Account
