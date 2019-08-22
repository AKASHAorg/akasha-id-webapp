import Button from '@akashaproject/design-system/dist/components/Button'
import Input from '@akashaproject/design-system/dist/components/Input'
import React, { useState } from 'react'
import { Redirect } from 'react-router'
import styled from 'styled-components'

export interface ProfileProps {
  loggedIn: boolean
  login: string
  firstName: string
  lastName: string
  password: string
  onLogOut: () => void
  onDeleteProfile: () => void
  onUpdateProfile: (
    newLogin: string,
    newFirstName: string,
    newLastName: string,
    newPassword: string,
  ) => void
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
  loggedIn,
  login,
  firstName,
  lastName,
  password,
  onLogOut,
  onDeleteProfile,
  onUpdateProfile,
}: ProfileProps) => {
  const [newLogin, changeLogin] = useState(login)
  const [newFirstName, changeFirstName] = useState(firstName)
  const [newLastName, changeLastName] = useState(lastName)
  const [newPassword, changePassword] = useState(password)

  return (
    <>
      {!loggedIn && <Redirect to="/" />}
      <h1>AKASHA.ID</h1>
      <Button buttonType="primary" onClick={onLogOut}>
        Log out
      </Button>
      <StyledRow>
        <Input
          placeholder="Login"
          value={newLogin}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeLogin(e.target.value)}
        />
      </StyledRow>
      <StyledRow>
        <Input
          placeholder="First name"
          value={newFirstName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeFirstName(e.target.value)}
        />
      </StyledRow>
      <StyledRow>
        <Input
          placeholder="Last name"
          value={newLastName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeLastName(e.target.value)}
        />
      </StyledRow>
      <StyledRow>
        <Input
          placeholder="Password"
          type="password"
          value={newPassword}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => changePassword(e.target.value)}
        />
      </StyledRow>
      <StyledRow>
        <StyledButton buttonType="alert" onClick={() => onDeleteProfile()}>
          Delete profile
        </StyledButton>
        <StyledButton
          buttonType="primary"
          onClick={() => onUpdateProfile(newLogin, newFirstName, newLastName, newPassword)}
        >
          Update profile
        </StyledButton>
      </StyledRow>
    </>
  )
}

export default Landing
