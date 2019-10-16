import Icon from '@akashaproject/design-system/dist/components/Icon'
import AkashaThemeContext from '@akashaproject/design-system/dist/providers/ThemeProvider'
import { Download } from 'grommet-icons'
import React, { useContext } from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'

import * as routes from '../../../consts/routes'
import { Column } from '../shared/Container'
import { SidebarContainer } from '../shared/SidebarContainer'
import {
  BackButton,
  Credits,
  MenuLink,
  MenuList,
  MenuRow,
  PageContainer,
  SignOutButton,
  TopContainer,
  Version,
} from './StyledSettings'

export interface SideMenuProps extends RouteComponentProps<any> {
  onSignOut: () => void
}

const SideMenu: React.FC<SideMenuProps> = ({ onSignOut, history }) => {
  const theme = useContext(AkashaThemeContext)

  return (
    <SidebarContainer>
      <Column size={6}>
        <TopContainer>
          <BackButton onClick={history.goBack}>
            <Icon type="back" width="20px" height="20px" color={theme.colors.dark} />
          </BackButton>
        </TopContainer>

        <PageContainer>
          <MenuList>
            <MenuRow>
              <MenuLink to={routes.account}>
                <span>Account</span>
                <Icon type="forward" width="20px" height="20px" color={theme.colors.dark} />
              </MenuLink>
            </MenuRow>
            <MenuRow>
              <MenuLink to={routes.account}>
                <span>FAQs</span>
                <Icon type="forward" width="20px" height="20px" color={theme.colors.dark} />
              </MenuLink>
            </MenuRow>
            <MenuRow>
              <MenuLink to={routes.account}>
                <span>Supported Apps</span>
                <Icon type="forward" width="20px" height="20px" color={theme.colors.dark} />
              </MenuLink>
            </MenuRow>
            <MenuRow>
              <MenuLink to={routes.account}>
                <span>Privacy Policy</span>
                <Icon type="forward" width="20px" height="20px" color={theme.colors.dark} />
              </MenuLink>
            </MenuRow>
          </MenuList>

          <div>
            <SignOutButton onClick={onSignOut}>
              <Download color="dark-3" size="20px" />
              <span>Sign out</span>
            </SignOutButton>

            <Version>Version 1.01 2019</Version>

            <Credits>AKASHA Foundation</Credits>
          </div>
        </PageContainer>
      </Column>
    </SidebarContainer>
  )
}

export default withRouter(SideMenu)
