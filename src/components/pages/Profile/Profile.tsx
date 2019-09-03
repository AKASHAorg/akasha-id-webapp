import Button from '@akashaproject/design-system/dist/components/Button'
import Input from '@akashaproject/design-system/dist/components/Input'
import React, { useState } from 'react'
import styled from 'styled-components'

import WithLabel from '../../shared/WithLabel'

export interface ProfileProps {
  username: string
  password: string
  usernameError: string
  passwordError: string
  onDeleteProfile: () => void
  onUpdateProfile: (newUsername: string, newPassword: string) => void
}

const StyledRow = styled.div`
  margin-top: 8px;
  width: 300px;
`

const StyledButton = styled(Button)`
  :not(:last-child) {
    margin-right: 8px;
  }
`

const Profile: React.FC<ProfileProps> = ({
  username,
  password,
  usernameError,
  passwordError,
  onDeleteProfile,
  onUpdateProfile,
}: ProfileProps) => {
  const [newUsername, changeUsername] = useState(username)
  const [newPassword, changePassword] = useState(password)

  return (
    <>
      <StyledRow>
        <WithLabel label="First name" error={usernameError}>
          <Input
            placeholder="Username"
            value={newUsername}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeUsername(e.target.value)}
          />
        </WithLabel>
      </StyledRow>
      <StyledRow>
        <WithLabel label="Password" error={passwordError}>
          <Input
            placeholder="Password"
            type="password"
            value={newPassword}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => changePassword(e.target.value)}
          />
        </WithLabel>
      </StyledRow>
      <StyledRow>
        <StyledButton buttonType="alert" onClick={() => onDeleteProfile()}>
          Delete profile
        </StyledButton>
        <StyledButton
          buttonType="primary"
          onClick={() => onUpdateProfile(newUsername, newPassword)}
        >
          Update profile
        </StyledButton>
      </StyledRow>
    </>
  )
}

export default Profile
