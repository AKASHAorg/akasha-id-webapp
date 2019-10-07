import Button from '@akashaproject/design-system/dist/components/Button'
import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { Field, InjectedFormProps } from 'redux-form'

import { SignInFormData } from '../../../types/users'
import isRequired from '../../../validators/is-required'
import { Input } from '../../shared/WithLabel'
import { Container } from '../shared/Container'
import { StyledColumn } from './components/Styled'

export interface SignInMatch {
  userid: string
}

export interface SignInProps extends RouteComponentProps<SignInMatch> {
  username: string
}

const passwordIsRequired = isRequired('Password cannot be empty')

const SignIn: React.FC<SignInProps & InjectedFormProps<SignInFormData, SignInProps, string>> = ({
  username,
  handleSubmit,
}) => {
  return (
    <Container>
      <StyledColumn size={5}>
        <form onSubmit={handleSubmit}>
          <h1>Welcome to AKASHA ID</h1>
          <p>
            You are signing in as <strong>{username}</strong>
          </p>

          <Field
            name="password"
            label="Password"
            placeholder="Enter the password"
            type="password"
            component={Input}
            validate={passwordIsRequired}
          />

          <Button buttonType="primary" onClick={handleSubmit}>
            Sign in
          </Button>
        </form>
      </StyledColumn>
    </Container>
  )
}

export default SignIn
