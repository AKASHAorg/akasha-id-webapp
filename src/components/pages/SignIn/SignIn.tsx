import Button from '@akashaproject/design-system/dist/components/Button'
import React, { useEffect } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { Field, InjectedFormProps } from 'redux-form'

import { SignInFormData } from '../../../types/users'
import isRequired from '../../../validators/is-required'
import { Input } from '../../shared/WithLabel'
import { WithRedirect } from '../../shared/WithRedirect'
import { Container } from '../shared/Container'
import { StyledColumn } from './components/Styled'

interface SignInMatch {
  userid: string
}

export interface SignInProps extends RouteComponentProps<SignInMatch> {
  username: string
  setUserId: (userId: string) => void
}

const passwordIsRequired = isRequired('Password cannot be empty')

const SignIn: React.FC<SignInProps & InjectedFormProps<SignInFormData, SignInProps, string>> = ({
  match,
  username,
  setUserId,
  handleSubmit,
}) => {
  useEffect(() => {
    setUserId(match.params.userid)
  }, [setUserId, match.params.userid])

  return (
    <WithRedirect shouldBeSignedIn={false}>
      <Container>
        <StyledColumn size={5}>
          <form onSubmit={handleSubmit}>
            <h1>Welcome to AKASHA.id</h1>
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
    </WithRedirect>
  )
}

export default SignIn
