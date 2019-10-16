import Icon from '@akashaproject/design-system/dist/components/Icon'
import AkashaThemeContext from '@akashaproject/design-system/dist/providers/ThemeProvider'
import React, { useContext } from 'react'

import * as routes from '../../../consts/routes'
import {
  Avatar,
  AvatarLink,
  SearchLink,
  TopContainer,
  TopHeader,
  TopHeaderGrey,
  TopSpace,
} from './Styled'

const MobileTopContainer: React.FC<{}> = () => {
  const theme = useContext(AkashaThemeContext)

  return (
    <TopContainer>
      <Icon type="akasha" width="21px" height="21px" color={theme.colors.dark} />
      <TopHeader>
        AKASHA <TopHeaderGrey>ID</TopHeaderGrey>
      </TopHeader>

      <TopSpace />

      <SearchLink to={routes.search}>
        <Icon type="search" width="20px" height="20px" color={theme.colors.blue} />
      </SearchLink>

      <AvatarLink to={routes.settings}>
        <Avatar>johny.doe</Avatar>
      </AvatarLink>
    </TopContainer>
  )
}

export default MobileTopContainer
