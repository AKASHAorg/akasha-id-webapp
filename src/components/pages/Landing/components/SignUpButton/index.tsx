import Button from '@akashaproject/design-system/dist/components/Button'
import React from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { signUp } from '../../../../../consts/routes'

interface SignUpButtonProps extends RouteComponentProps<any> {}

const SignUpButton: React.FC<SignUpButtonProps> = ({ history }) => {
  return (
    <Button buttonType="primary" onClick={() => history.push(signUp)}>
      Let's get you started with a new account!
    </Button>
  )
}

export default withRouter(SignUpButton)
