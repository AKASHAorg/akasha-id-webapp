import Button from '@akashaproject/design-system/dist/components/Button'
import Icon from '@akashaproject/design-system/dist/components/Icon'
import AkashaThemeContext from '@akashaproject/design-system/dist/providers/ThemeProvider'
import React, { useContext } from 'react'
import { Redirect } from 'react-router'
import User from './components/User'

interface UserProps {
  login: string
}

export interface LandingProps {
  loggedIn: boolean
  users: UserProps[]
  onClickUser: (login: string) => () => void
  onSignUp: () => void
}

const Landing: React.FC<LandingProps> = ({
  loggedIn,
  users,
  onClickUser,
  onSignUp,
}: LandingProps) => {
  const theme = useContext(AkashaThemeContext)

  return (
    <>
      {loggedIn && <Redirect to="/profile" />}
      <h1>AKASHA.ID</h1>
      <h2>Select a profile</h2>
      <ul>
        {users.map(user => (
          <User
            avatar="https://placebeard.it/360x360"
            key={user.login}
            login={user.login}
            onClick={onClickUser(user.login)}
          />
        ))}
      </ul>
      <Button buttonType="primary" onClick={onSignUp}>
        <Icon
          type="plus"
          width={theme.spacing.fontSize}
          height={theme.spacing.fontSize}
          color={theme.colors.white}
        />
        Sign up
      </Button>
    </>
  )
}

export default Landing
