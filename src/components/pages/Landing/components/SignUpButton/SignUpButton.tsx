import Button, { ButtonProps } from '@akashaproject/design-system/dist/components/Button'
import React from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'

import { signUp } from '../../../../../consts/routes'

interface SignUpButtonProps extends RouteComponentProps<any>, Omit<ButtonProps, 'onClick'> {}

const SignUpButton: React.FC<SignUpButtonProps> = ({ history, ...props }) => {
  return (
    <Button {...props} buttonType="primary" onClick={() => history.push(signUp)}>
      Create account
    </Button>
  )
}

export default withRouter(SignUpButton)
