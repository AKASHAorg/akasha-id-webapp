import Button from '@akashaproject/design-system/dist/components/Button'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Field, InjectedFormProps } from 'redux-form'

import { account } from '../../../../../consts/i18n'
import { ACCOUNT } from '../../../../../consts/i18n-ns'
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

const nameIsRequired = isRequired(account.accountForm.name.errorIsRequired)
const oldPasswordIsRequired = isRequired(account.accountForm.oldPassword.errorIsRequired)
const newPasswordIsRequired = isRequired(account.accountForm.newPassword.errorIsRequired)
const passwordConfirmationIsRequired = (
  confirmPassword: string,
  formValues: AccountFormData,
): string | undefined =>
  confirmPassword === formValues.newPassword
    ? undefined
    : account.accountForm.confirmPassword.errorIsRequired

const Account: React.FC<InjectedFormProps<AccountFormData, {}, string>> = ({ handleSubmit }) => {
  const { t } = useTranslation(ACCOUNT)

  return (
    <form onSubmit={handleSubmit}>
      <AccountHeader>{t(account.accountForm.header)}</AccountHeader>
      <FieldContainer>
        <Field
          name="name"
          label={t(account.accountForm.name.label)}
          placeholder={t(account.accountForm.name.placeholder)}
          component={Input}
          validate={nameIsRequired}
        />
      </FieldContainer>

      <PasswordContainer>
        <PasswordHeader>{t(account.accountForm.passwordHeader)}</PasswordHeader>

        <FieldContainer>
          <Field
            name="oldPassword"
            label={t(account.accountForm.oldPassword.label)}
            placeholder={t(account.accountForm.oldPassword.placeholder)}
            component={Input}
            type="password"
            validate={oldPasswordIsRequired}
          />
        </FieldContainer>

        <FieldContainer>
          <Field
            name="newPassword"
            label={t(account.accountForm.newPassword.label)}
            placeholder={t(account.accountForm.newPassword.placeholder)}
            component={Input}
            type="password"
            validate={newPasswordIsRequired}
          />
        </FieldContainer>

        <FieldContainer>
          <Field
            name="confirmPassword"
            label={t(account.accountForm.confirmPassword.label)}
            placeholder={t(account.accountForm.confirmPassword.placeholder)}
            component={Input}
            type="password"
            validate={passwordConfirmationIsRequired}
          />
        </FieldContainer>

        <ButtonContainer>
          <Button buttonType="primary" onClick={handleSubmit}>
            {t(account.accountForm.resetPassword)}
          </Button>
        </ButtonContainer>
      </PasswordContainer>
    </form>
  )
}

export default Account
