import Button from '@akashaproject/design-system/dist/components/Button'
import Input from '@akashaproject/design-system/dist/components/Input'
import React, { useState } from 'react'
import styled from 'styled-components'

import WithLabel from '../../shared/WithLabel'

export interface ProfileProps {
  username: string
  firstName: string
  lastName: string
  password: string
  onDeleteProfile: () => void
  onUpdateProfile: (newFirstName: string, newLastName: string, newPassword: string) => void
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

const Landing: React.FC<ProfileProps> = ({
  username,
  firstName,
  lastName,
  password,
  onDeleteProfile,
  onUpdateProfile,
}: ProfileProps) => {
  const [newFirstName, changeFirstName] = useState(firstName)
  const [newLastName, changeLastName] = useState(lastName)
  const [newPassword, changePassword] = useState(password)

  return (
    <>
      <StyledRow>{username}</StyledRow>
      <StyledRow>
        <WithLabel label="First name" error="">
          <Input
            placeholder="First name"
            value={newFirstName}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeFirstName(e.target.value)}
          />
        </WithLabel>
      </StyledRow>
      <StyledRow>
        <WithLabel label="Last name" error="">
          <Input
            placeholder="Last name"
            value={newLastName}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeLastName(e.target.value)}
          />
        </WithLabel>
      </StyledRow>
      <StyledRow>
        <WithLabel label="Password" error="">
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
          onClick={() => onUpdateProfile(newFirstName, newLastName, newPassword)}
        >
          Update profile
        </StyledButton>
      </StyledRow>
    </>
  )
}

export default Landing
