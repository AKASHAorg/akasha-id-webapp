import Icon from '@akashaproject/design-system/dist/components/Icon'
import AkashaThemeContext from '@akashaproject/design-system/dist/providers/ThemeProvider'
import { Download } from 'grommet-icons'
import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'

import { settings, translation } from '../../../../../../consts/i18n'
import { SETTINGS } from '../../../../../../consts/i18n-ns'
import * as routes from '../../../../../../consts/routes'
import { BottomContainer, Logo, MenuItem, MenuList, SignOut, TopContainer } from './StyledSidebar'

interface SidebarProps {
  onSignOut: () => void
}

const Sidebar: React.FC<SidebarProps> = ({ onSignOut }) => {
  const theme = useContext(AkashaThemeContext)

  const { t } = useTranslation(SETTINGS)

  return (
    <>
      <TopContainer>
        <Logo>akasha.id</Logo>
        <MenuList>
          <MenuItem>
            <NavLink to={routes.personas}>
              <Icon type="profileOverview" color={theme.colors.grey} width="18px" height="20px" />
              <div>{t(translation.desktopPageTitles.personas)}</div>
            </NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink to={routes.apps}>
              <div>{t(translation.desktopPageTitles.apps)}</div>
            </NavLink>
          </MenuItem>
        </MenuList>
      </TopContainer>

      <BottomContainer>
        <SignOut onClick={onSignOut}>
          <Download color="dark-3" size="20px" />
          <div>{t(settings.signOut)}</div>
        </SignOut>
      </BottomContainer>
    </>
  )
}

export default Sidebar
