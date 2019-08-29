import Button from '@akashaproject/design-system/dist/components/Button'
import Icon from '@akashaproject/design-system/dist/components/Icon'
import AkashaThemeContext from '@akashaproject/design-system/dist/providers/ThemeProvider'
import React, { useContext } from 'react'
import { User } from '../../../states/landing'
import { User as UserRow } from './components/User'

export interface LandingProps {
  users: User[]
  onSignUp: () => void
}

const Landing: React.FC<LandingProps> = ({ users, onSignUp }: LandingProps) => {
  const theme = useContext(AkashaThemeContext)

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
          <UserRow key={user.username} {...user} />
        ))}
      </ul>
    </>
  )
}

export default Landing
