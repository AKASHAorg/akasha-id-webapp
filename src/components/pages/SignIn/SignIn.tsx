import Button from '@akashaproject/design-system/dist/components/Button'
import Icon from '@akashaproject/design-system/dist/components/Icon'
import InputComponent from '@akashaproject/design-system/dist/components/Input'
import AkashaThemeContext from '@akashaproject/design-system/dist/providers/ThemeProvider'
import React, { useContext } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { Field, InjectedFormProps } from 'redux-form'

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

const passwordIsRequired = isRequired('Password cannot be empty')

const noop = () => {}

const SignIn: React.FC<SignInProps & InjectedFormProps<SignInFormData, SignInProps, string>> = ({
  username,
  handleSubmit,
}) => {
  const theme = useContext(AkashaThemeContext)

  return (
    <Container>
      <LeftPart>
        <Column size={1} hideMobile={true} />
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
                <Header>Welcome back!</Header>
                <PaleText>Here will say something wicked</PaleText>

                <FieldContainer>
                  <WithLabel error="" label="Username">
                    <InputComponent value={username} placeholder="" onChange={noop} />
                  </WithLabel>

                  <Field
                    name="password"
                    label="Password"
                    placeholder="Enter the password"
                    type="password"
                    component={Input}
                    validate={passwordIsRequired}
                  />
                </FieldContainer>

                <Button buttonType="primary" onClick={handleSubmit}>
                  Sign in
                </Button>
              </form>
            </TopContainer>

            <BottomContainer>
              <div>Don't have an account?</div>
              <Link to={routes.signUp}>Create Account</Link>
            </BottomContainer>
          </FormContainer>
        </Column>
      </LeftPart>
    </Container>
  )
}

export default SignIn
