import Icon from '@akashaproject/design-system/dist/components/Icon'
import AkashaThemeContext from '@akashaproject/design-system/dist/providers/ThemeProvider'
import React, { useContext } from 'react'

import * as routes from '../../../consts/routes'
import { MobileTopBarContainer } from '../MobileTopBarContainer'
import { MenuLink, SearchLink, TopHeader, TopHeaderGrey, TopSpace } from './Styled'

import menuIcon from './menu.svg'
import searchIcon from './search.svg'

const MobileTopBar: React.FC<{}> = () => {
  const theme = useContext(AkashaThemeContext)

  return (
    <MobileTopBarContainer>
      <Icon type="akasha" width="21px" height="21px" color={theme.colors.dark} />
      <TopHeader>
        AKASHA <TopHeaderGrey>ID</TopHeaderGrey>
      </TopHeader>

      <TopSpace />

      <SearchLink to={routes.search}>
        <img src={searchIcon} alt="Search" />
      </SearchLink>

      <MenuLink to={routes.settings}>
        <img src={menuIcon} alt="Search" />
      </MenuLink>
    </MobileTopBarContainer>
  )
}

export default MobileTopBar
