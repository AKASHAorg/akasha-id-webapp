import Icon from '@akashaproject/design-system/dist/components/Icon'
import AkashaThemeContext from '@akashaproject/design-system/dist/providers/ThemeProvider'
import React, { useContext } from 'react'

import * as routes from '../../../consts/routes'
import { Profile } from '../../../types/users'
import { Column, Container } from '../shared/Container'
import { LeftPart } from '../shared/SignPage'
import { SignInButton } from './components/SignInButton'
import { SignUpButton } from './components/SignUpButton'
import {
  DividerBorder,
  DividerContainer,
  DividerText,
  Dot,
  DotContainer,
  Header,
  IconContainer,
  IconLabel,
  IconLabelGrey,
  LogoWithoutUsers,
  LogoWithUsers,
  PageContainer,
  PaleText,
  SignInButtonContainer,
  SignInLink,
} from './Styled'

export interface LandingProps {
  users: Profile[]
}

const Landing: React.FC<LandingProps> = ({ users }) => {
  const theme = useContext(AkashaThemeContext)

  return (
    <Container>
      <LeftPart>
        <Column size={1} hideMobile={true} />
        <Column size={4}>
          <PageContainer>
            <IconContainer>
              <Icon type="akasha" width="26px" height="24px" color={theme.colors.dark} />
              <IconLabel>
                Akasha <IconLabelGrey>Id</IconLabelGrey>
              </IconLabel>
            </IconContainer>

            {users.length === 0 && <LogoWithoutUsers />}
            {users.length > 0 && <LogoWithUsers />}

            {users.length > 0 && (
              <>
                <SignInButtonContainer>
                  {users.map(user => (
                    <SignInButton key={user.id} userId={user.id}>
                      Sign in with {user.name}
                    </SignInButton>
                  ))}

                  <SignInButton userId="">Sign in with other account</SignInButton>
                </SignInButtonContainer>

                <DividerContainer>
                  <DividerBorder />
                  <DividerText>OR</DividerText>
                  <DividerBorder />
                </DividerContainer>

                <SignUpButton fullWidth={true} />
              </>
            )}

            {users.length === 0 && (
              <>
                <Header>Something Amazing</Header>
                <PaleText>
                  Here will say somethin relevant about AKASHA ID and how it works.
                </PaleText>

                <DotContainer>
                  <Dot active={true} />
                  <Dot active={false} />
                  <Dot active={false} />
                </DotContainer>

                <SignUpButton />

                <SignInLink to={routes.signIn.replace(routes.userIdParam, '')}>Sign in</SignInLink>
              </>
            )}
          </PageContainer>
        </Column>
      </LeftPart>
    </Container>
  )
}

export default Landing
