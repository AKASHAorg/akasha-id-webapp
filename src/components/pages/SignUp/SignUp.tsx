import Button from '@akashaproject/design-system/dist/components/Button'
import Icon from '@akashaproject/design-system/dist/components/Icon'
import AkashaThemeContext from '@akashaproject/design-system/dist/providers/ThemeProvider'
import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { Field, InjectedFormProps } from 'redux-form'

import { signUp } from '../../../consts/i18n'
import { SIGN_UP } from '../../../consts/i18n-ns'
import * as routes from '../../../consts/routes'
import { SignUpFormData } from '../../../types/users'
import isRequired from '../../../validators/is-required'
import { Input } from '../../shared/WithLabel'
import { Column, Container } from '../shared/Container'
import {
  BottomContainer,
  FieldContainer,
  FormContainer,
  Header,
  IconContainer,
  IconLabel,
  IconLabelGrey,
  LeftPart,
  Link,
  PaleText,
  TopContainer,
} from '../shared/SignPage'

const nameIsRequired = isRequired(signUp.username.errorIsRequired)
const passwordIsRequired = isRequired(signUp.password.errorIsRequired)
const passwordConfirmationIsRequired = (value: string, values: { password: string }) =>
  value && values.password === value ? undefined : signUp.confirm.errorIsRequired

const SignUp: React.FC<InjectedFormProps<SignUpFormData, {}, string>> = ({ handleSubmit }) => {
  const theme = useContext(AkashaThemeContext)
  const { t } = useTranslation(SIGN_UP)

  return (
    <Container>
      <LeftPart>
        <Column size={4} hideMobile={true} />
        <Column size={4}>
          <FormContainer>
            <TopContainer>
              <IconContainer>
                <Icon type="akasha" width="26px" height="24px" color={theme.colors.dark} />
                <IconLabel>
                  Akasha <IconLabelGrey>Id</IconLabelGrey>
                </IconLabel>
              </IconContainer>

              <form onSubmit={handleSubmit}>
                <Header>{t(signUp.header)}</Header>
                <PaleText>{t(signUp.subheader)}</PaleText>

                <FieldContainer>
                  <Field
                    name="name"
                    label={t(signUp.username.label)}
                    placeholder={t(signUp.username.placeholder)}
                    type="text"
                    component={Input}
                    validate={nameIsRequired}
                  />

                  <Field
                    name="password"
                    label={t(signUp.password.label)}
                    placeholder={t(signUp.password.placeholder)}
                    type="password"
                    component={Input}
                    validate={passwordIsRequired}
                  />

                  <Field
                    name="confirm"
                    label={t(signUp.confirm.label)}
                    placeholder={t(signUp.confirm.placeholder)}
                    type="password"
                    component={Input}
                    validate={passwordConfirmationIsRequired}
                  />
                </FieldContainer>

                <Button buttonType="primary" onClick={handleSubmit}>
                  {t(signUp.createAccount)}
                </Button>
              </form>
            </TopContainer>

            <BottomContainer>
              <div>{t(signUp.signIn.text)}</div>
              <Link to={routes.landing}>{t(signUp.signIn.link)}</Link>
            </BottomContainer>
          </FormContainer>
        </Column>
      </LeftPart>
    </Container>
  )
}

export default SignUp
