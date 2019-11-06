import Icon from '@akashaproject/design-system/dist/components/Icon'
import AkashaThemeContext from '@akashaproject/design-system/dist/providers/ThemeProvider'
import React, { useContext } from 'react'

import * as routes from '../../../consts/routes'
import { MobileTopBarContainer } from '../MobileTopBarContainer'
import { MenuLink, SearchLink, TopHeader, TopHeaderGrey, TopSpace } from './Styled'

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
        <Icon type="search" width="20px" height="20px" color={theme.colors.dark} />
      </SearchLink>

      <MenuLink to={routes.settings}>
        <svg
          role="img"
          aria-label="[title + description]"
          width="20px"
          height="20px"
          stroke={theme.colors.dark}
          x="0px"
          y="0px"
          viewBox="0 0 96 96"
          enableBackground="new 0 0 96 96"
        >
          <title>align</title>
          <desc>align by fahmionline from the Noun Project</desc>
          <g>
            <rect x="7" y="17.973" width="82" height="3" />
            <rect x="7" y="46.5" width="82" height="3" />
            <rect x="7" y="75.027" width="82" height="3" />
          </g>
        </svg>
      </MenuLink>
    </MobileTopBarContainer>
  )
}

export default MobileTopBar
