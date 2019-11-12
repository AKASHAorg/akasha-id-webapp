import Icon from '@akashaproject/design-system/dist/components/Icon'
import AkashaThemeContext from '@akashaproject/design-system/dist/providers/ThemeProvider'
import React, { useContext } from 'react'
import { Trans, useTranslation } from 'react-i18next'

import { landing } from '../../../consts/i18n'
import { LANDING } from '../../../consts/i18n-ns'
import { Account } from '../../../types/users'
import { Column, Container } from '../shared/Container'
import { LeftPart } from '../shared/SignPage'
import { SignInButton } from './components/SignInButton'
import { SignUpButton } from './components/SignUpButton'
import {
  ColoredUserName,
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
} from './Styled'

import landingLogo from './landing.png'

export interface LandingProps {
  users: Account[]
}

const Landing: React.FC<LandingProps> = ({ users }) => {
  const theme = useContext(AkashaThemeContext)
  const { t } = useTranslation(LANDING)

  return (
    <Container>
      <LeftPart>
        <Column size={4} hideMobile={true} />
        <Column size={4}>
          <PageContainer>
            <IconContainer>
              <Icon type="akasha" width="26px" height="24px" color={theme.colors.dark} />
              <IconLabel>
                Akasha <IconLabelGrey>Id</IconLabelGrey>
              </IconLabel>
            </IconContainer>

            {users.length === 0 && (
              <LogoWithoutUsers>
                <img src={landingLogo} alt="Logo" />
              </LogoWithoutUsers>
            )}
            {users.length > 0 && (
              <LogoWithUsers>
                <img src={landingLogo} alt="Logo" />
              </LogoWithUsers>
            )}

            {users.length > 0 && (
              <>
                <SignInButtonContainer>
                  {users.map(user => (
                    <SignInButton key={user.id} userId={user.id}>
                      <Trans i18nKey={landing.signInWith} values={{ userName: user.name }}>
                        Sign in with <ColoredUserName>{user.name}</ColoredUserName>
                      </Trans>
                    </SignInButton>
                  ))}
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
                <Header>{t(landing.noUsersHeader)}</Header>
                <PaleText>{t(landing.noUsersText)}</PaleText>

                <DotContainer>
                  <Dot active={true} />
                  <Dot active={false} />
                  <Dot active={false} />
                </DotContainer>

                <SignUpButton />
              </>
            )}
          </PageContainer>
        </Column>
      </LeftPart>
    </Container>
  )
}

export default Landing
