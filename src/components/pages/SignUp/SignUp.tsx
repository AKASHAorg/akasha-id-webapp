import Button from '@akashaproject/design-system/dist/components/Button'
import Icon from '@akashaproject/design-system/dist/components/Icon'
import AkashaThemeContext from '@akashaproject/design-system/dist/providers/ThemeProvider'
import React, { useContext } from 'react'
import { Field, InjectedFormProps } from 'redux-form'

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

const nameIsRequired = isRequired('Name cannot be empty')
const passwordIsRequired = isRequired('Password cannot be empty')
const passwordConfirmationIsRequired = (value: string, values: { password: string }) =>
  value && values.password === value ? undefined : 'Password confirmation is incorrect'

const SignUp: React.FC<InjectedFormProps<SignUpFormData, {}, string>> = ({ handleSubmit }) => {
  const theme = useContext(AkashaThemeContext)

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
                <Header>Welcome!</Header>
                <PaleText>Here will say something wicked</PaleText>

                <FieldContainer>
                  <Field
                    name="name"
                    label="Username"
                    placeholder="Type a username"
                    type="text"
                    component={Input}
                    validate={nameIsRequired}
                  />

                  <Field
                    name="password"
                    label="Password"
                    placeholder="Type password"
                    type="password"
                    component={Input}
                    validate={passwordIsRequired}
                  />

                  <Field
                    name="confirm"
                    label="Confirm password"
                    placeholder="Retype password"
                    type="password"
                    component={Input}
                    validate={passwordConfirmationIsRequired}
                  />
                </FieldContainer>

                <Button buttonType="primary" onClick={handleSubmit}>
                  Create Account
                </Button>
              </form>
            </TopContainer>

            <BottomContainer>
              <div>Have an account?</div>
              <Link to={routes.landing}>Sign in</Link>
            </BottomContainer>
          </FormContainer>
        </Column>
      </LeftPart>
    </Container>
  )
}

export default SignUp
