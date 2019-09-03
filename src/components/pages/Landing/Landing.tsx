import Button from '@akashaproject/design-system/dist/components/Button'
import Icon from '@akashaproject/design-system/dist/components/Icon'
import AkashaThemeContext from '@akashaproject/design-system/dist/providers/ThemeProvider'
import React, { useContext, useEffect } from 'react'
import { Profile } from '../../../types/users'
import { User } from './components/User'

export interface LandingProps {
  users: Profile[]
  onSignUp: () => void
  loadUsers: () => void
}

const Landing: React.FC<LandingProps> = ({ users, onSignUp, loadUsers }: LandingProps) => {
  const theme = useContext(AkashaThemeContext)
  useEffect(() => {
    loadUsers()
  }, [loadUsers])

  return (
    <>
      <h1>AKASHA.ID</h1>
      <Button buttonType="primary" onClick={onSignUp}>
        <Icon
          type="plus"
          width={theme.spacing.fontSize}
          height={theme.spacing.fontSize}
          color={theme.colors.white}
        />
        Sign up
      </Button>
      <ul>
        {users.map(user => (
          <User key={user.id} userId={user.id} username={user.name} />
        ))}
      </ul>
    </>
  )
}

export default Landing
