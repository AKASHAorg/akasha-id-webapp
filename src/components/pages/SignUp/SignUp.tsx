import Button from '@akashaproject/design-system/dist/components/Button'
import React from 'react'
import { Field, InjectedFormProps } from 'redux-form'

import { SignUpFormData } from '../../../types/users'
import isRequired from '../../../validators/is-required'
import { H1 } from '../../shared/styled'
import { Input } from '../../shared/WithLabel'
import { Column, Container } from '../shared/Container'
import { FieldContainer, FormContainer, PaleText } from './components/styled'

const nameIsRequired = isRequired('Name cannot be empty')
const passwordIsRequired = isRequired('Password cannot be empty')
const passwordConfirmationIsRequired = (value: string, values: { password: string }) =>
  value && values.password === value ? undefined : 'Password confirmation is incorrect'

const SignUp: React.FC<InjectedFormProps<SignUpFormData, {}, string>> = ({ handleSubmit }) => {
  return (
    <Container>
      <FormContainer>
        <Column size={1} />
        <Column size={4}>
          <form onSubmit={handleSubmit}>
            <H1>Welcome to AKASHA ID</H1>
            <PaleText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium purus et
              porta molestie. Pellentesque et felis sit amet.
            </PaleText>

            <FieldContainer>
              <Field
                name="name"
                label="Username"
                placeholder="Pick a username"
                type="text"
                component={Input}
                validate={nameIsRequired}
              />

              <Field
                name="password"
                label="Password"
                placeholder="Type a password"
                type="password"
                component={Input}
                validate={passwordIsRequired}
              />

              <Field
                name="confirm"
                label="Confirm password"
                placeholder="Type a password"
                type="password"
                component={Input}
                validate={passwordConfirmationIsRequired}
              />

              <Button buttonType="primary" onClick={handleSubmit}>
                Create Account
              </Button>
            </FieldContainer>
          </form>
        </Column>
      </FormContainer>
    </Container>
  )
}

export default SignUp
