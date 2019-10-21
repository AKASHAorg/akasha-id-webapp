import Icon from '@akashaproject/design-system/dist/components/Icon'
import AkashaThemeContext from '@akashaproject/design-system/dist/providers/ThemeProvider'
import { Download } from 'grommet-icons'
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
  SignOutButton,
  Version,
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

export default SideMenu
