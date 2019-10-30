import Icon from '@akashaproject/design-system/dist/components/Icon'
import AkashaThemeContext from '@akashaproject/design-system/dist/providers/ThemeProvider'
import { Logout } from 'grommet-icons'
import React, { useContext } from 'react'

import * as routes from '../../../consts/routes'
import { MobileTopBarWithArrowCancelButton } from '../../shared/MobileTopBarWithArrowCancelButton'
import { Column } from '../shared/Container'
import { SidebarContainer } from '../shared/SidebarContainer'
import {
  Credits,
  MenuLink,
  MenuList,
  MenuRow,
  PageContainer,
  SignOutBlock,
  SignOutButton,
} from './StyledSettings'

export interface SideMenuProps {
  onSignOut: () => void
}

const SideMenu: React.FC<SideMenuProps> = ({ onSignOut }) => {
  const theme = useContext(AkashaThemeContext)

  return (
    <SidebarContainer>
      <Column size={6}>
        <MobileTopBarWithArrowCancelButton />

        <PageContainer>
          <MenuList>
            <MenuRow>
              <MenuLink to={routes.account}>
                <span>Account</span>
                <Icon type="forward" width="20px" height="20px" color={theme.colors.dark} />
              </MenuLink>
            </MenuRow>
            <MenuRow>
              <MenuLink to={routes.faq}>
                <span>FAQs</span>
                <Icon type="forward" width="20px" height="20px" color={theme.colors.dark} />
              </MenuLink>
            </MenuRow>
            <MenuRow>
              <MenuLink to={routes.supportedApps}>
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

          <SignOutBlock>
            <SignOutButton onClick={onSignOut}>
              <span>Sign out</span>
              <Logout color="#132540" size="20px" />
            </SignOutButton>

            <Credits>
              <div>Version 1.01 2019</div>
              <div>AKASHA Foundation</div>
            </Credits>
          </SignOutBlock>
        </PageContainer>
      </Column>
    </SidebarContainer>
  )
}

export default SideMenu
