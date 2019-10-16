import React from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'

import { signIn, userIdParam } from '../../../../../consts/routes'
import StyledSignInButton from './Styled'

interface SignInButtonProps extends React.PropsWithChildren<RouteComponentProps<any>> {
  userId: string
}

const SignInButton: React.FC<SignInButtonProps> = ({ history, userId, children }) => {
  return (
    <StyledSignInButton onClick={() => history.push(signIn.replace(userIdParam, userId))}>
      {children}
    </StyledSignInButton>
  )
}

export default withRouter(SignInButton)
