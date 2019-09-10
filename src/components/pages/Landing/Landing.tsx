import List from '@akashaproject/design-system/dist/components/List'
import React from 'react'
import { Link } from 'react-router-dom'

import { signIn, userIdParam } from '../../../consts/routes'
import { Profile } from '../../../types/users'
import { WithRedirect } from '../../shared/WithRedirect'
import { Container } from '../shared/Container'
import SignUpButton from './components/SignUpButton'
import { StyledColumn, StyledRow } from './components/Styled'

export interface LandingProps {
  users: Profile[]
}

const Landing: React.FC<LandingProps> = ({ users }) => {
  return (
    <WithRedirect shouldBeSignedIn={false}>
      <Container>
        <StyledColumn size={5}>
          <h1>Welcome to AKASHA.id</h1>
          <p>A true self-sovereign identity provider</p>

          <SignUpButton />

          <p>Or sign in into already existing profile</p>

          <List
            dataSource={users}
            renderItem={(user: Profile) => (
              <StyledRow>
                <Link to={signIn.replace(userIdParam, user.id)}>{user.name}</Link>
              </StyledRow>
            )}
          />
        </StyledColumn>
      </Container>
    </WithRedirect>
  )
}

export default Landing
