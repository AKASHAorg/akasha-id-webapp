import Button from '@akashaproject/design-system/dist/components/Button'
import Icon from '@akashaproject/design-system/dist/components/Icon'
import InputComponent from '@akashaproject/design-system/dist/components/Input'
import AkashaThemeContext from '@akashaproject/design-system/dist/providers/ThemeProvider'
import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { RouteComponentProps } from 'react-router-dom'
import { Field, InjectedFormProps } from 'redux-form'

import { signIn } from '../../../consts/i18n'
import { SIGN_IN } from '../../../consts/i18n-ns'
import * as routes from '../../../consts/routes'
import { SignInFormData } from '../../../types/users'
import isRequired from '../../../validators/is-required'
import { Input } from '../../shared/WithLabel'
import WithLabel from '../../shared/WithLabel/WithLabel'
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

export interface SignInMatch {
  userid: string
}

export interface SignInProps extends RouteComponentProps<SignInMatch> {
  username: string
}

const noop = () => {}

const passwordIsRequired = isRequired(signIn.password.errorIsRequired)

const SignIn: React.FC<SignInProps & InjectedFormProps<SignInFormData, SignInProps, string>> = ({
  username,
  handleSubmit,
}) => {
  const theme = useContext(AkashaThemeContext)
  const { t } = useTranslation(SIGN_IN)

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
                <Header>{t(signIn.header)}</Header>
                <PaleText>{t(signIn.subheader)}</PaleText>

                <FieldContainer>
                  <WithLabel error="" label={t(signIn.username.label)}>
                    <InputComponent value={username} placeholder="" onChange={noop} />
                  </WithLabel>

                  <Field
                    name="password"
                    label={t(signIn.password.label)}
                    placeholder={t(signIn.password.placeholder)}
                    type="password"
                    component={Input}
                    validate={passwordIsRequired}
                  />
                </FieldContainer>

                <Button buttonType="primary" onClick={handleSubmit}>
                  {t(signIn.signIn)}
                </Button>
              </form>
            </TopContainer>

            <BottomContainer>
              <div>{t(signIn.createAccount.text)}</div>
              <Link to={routes.signUp}>{t(signIn.createAccount.link)}</Link>
            </BottomContainer>
          </FormContainer>
        </Column>
      </LeftPart>
    </Container>
  )
}

export default SignIn
