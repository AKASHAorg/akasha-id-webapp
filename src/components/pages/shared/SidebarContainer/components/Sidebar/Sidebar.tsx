import Icon from '@akashaproject/design-system/dist/components/Icon'
import AkashaThemeContext from '@akashaproject/design-system/dist/providers/ThemeProvider'
import { Download } from 'grommet-icons'
import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'

import * as routes from '../../../../../../consts/routes'
import { BottomContainer, Logo, MenuItem, MenuList, SignOut, TopContainer } from './StyledSidebar'

interface SidebarProps {
  onSignOut: () => void
}

const Sidebar: React.FC<SidebarProps> = ({ onSignOut }) => {
  const theme = useContext(AkashaThemeContext)

  return (
    <>
      <TopContainer>
        <Logo>akasha.id</Logo>
        <MenuList>
          <MenuItem>
            <NavLink to={routes.profile}>
              <Icon type="profileOverview" color={theme.colors.grey} width="18px" height="20px" />
              <div>Profile</div>
            </NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink to={routes.apps}>
              <div>Applications</div>
            </NavLink>
          </MenuItem>
        </MenuList>
      </TopContainer>

      <BottomContainer>
        <SignOut onClick={onSignOut}>
          <Download color="dark-3" size="20px" />
          <div>Sign out</div>
        </SignOut>
      </BottomContainer>
    </>
  )
}

export default Sidebar
