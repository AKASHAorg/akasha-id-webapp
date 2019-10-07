import Icon from '@akashaproject/design-system/dist/components/Icon'
import AkashaThemeContext from '@akashaproject/design-system/dist/providers/ThemeProvider'
import React, { useContext } from 'react'

import * as routes from '../../../../../consts/routes'
import { App as AppType } from '../../../../../types/apps'
import {
  StyledDate,
  StyledHeader,
  StyledImageContainer,
  StyledLink,
  StyledRow,
  StyledStatus,
  StyledSubheaderContainer,
  StyledTextContainer,
} from './StyledApp'

export interface AppProps extends React.Props<any>, AppType {
  token: string
}

const App: React.FC<AppProps> = ({ token, name, icon }: AppProps) => {
  const theme = useContext(AkashaThemeContext)

  return (
    <StyledRow>
      <StyledImageContainer>
        <img src={icon} alt={name} />
      </StyledImageContainer>
      <StyledTextContainer>
        <StyledHeader>{name}</StyledHeader>
        <StyledSubheaderContainer>
          <StyledStatus>Active</StyledStatus>
          <StyledDate>Profile requested on 20 July 2019</StyledDate>
        </StyledSubheaderContainer>
      </StyledTextContainer>
      <StyledLink to={routes.appDetails.replace(routes.tokenParam, token)}>
        <div>See detail</div>
        <Icon type="arrowRight" color={theme.colors.dark} width="16px" height="16px" />
      </StyledLink>
    </StyledRow>
  )
}

export default App
