import Button from '@akashaproject/design-system/dist/components/Button'
import React from 'react'
import { Field, InjectedFormProps } from 'redux-form'

import { SignUpFormData } from '../../../types/users'
import isRequired from '../../../validators/is-required'
import { Input } from '../../shared/WithLabel'
import { WithRedirect } from '../../shared/WithRedirect'
import { Container } from '../shared/Container'
import { StyledColumn } from './components/Styled'

const nameIsRequired = isRequired('Name cannot be empty')
const passwordIsRequired = isRequired('Password cannot be empty')

const SignUp: React.FC<InjectedFormProps<SignUpFormData, {}, string>> = ({ handleSubmit }) => {
  return (
    <WithRedirect shouldBeSignedIn={false}>
      <Container>
        <StyledColumn size={5}>
          <form onSubmit={handleSubmit}>
            <h1>Welcome to AKASHA.id</h1>

            <Field
              name="name"
              label="Name"
              placeholder="Pick a username"
              type="text"
              component={Input}
              validate={nameIsRequired}
            />

            <Field
              name="password"
              label="Password"
              placeholder="Pick a password"
              type="password"
              component={Input}
              validate={passwordIsRequired}
            />

            <Button buttonType="primary" onClick={handleSubmit}>
              Create user
            </Button>
          </form>
        </StyledColumn>
      </Container>
    </WithRedirect>
  )
}

export default SignUp
