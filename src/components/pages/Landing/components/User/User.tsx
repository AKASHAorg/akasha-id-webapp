import Button from '@akashaproject/design-system/dist/components/Button'
import React from 'react'
import styled from 'styled-components'

interface UserProps {
  username: string
  userId: string
  onSignIn: (userId: string) => void
}

const UserRow = styled.li`
  padding: 8px;
  list-style: none;
`

const StyledButton = styled(Button)`
  margin-left: 24px;
`

const User: React.FC<UserProps> = ({ username, userId, onSignIn }) => {
  return (
    <UserRow>
      {userId}: {username}
      <StyledButton ghost={true} onClick={() => onSignIn(userId)}>
        Sign in
      </StyledButton>
    </UserRow>
  )
}

export default User
