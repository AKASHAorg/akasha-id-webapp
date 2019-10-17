import React from 'react'

import * as routes from '../../../../../consts/routes'
import { App as AppType } from '../../../../../types/apps'
import {
  StyledDate,
  StyledDescription,
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

const App: React.FC<AppProps> = ({ token, name, description, icon }: AppProps) => {
  return (
    <StyledRow>
      <StyledLink to={routes.appDetails.replace(routes.tokenParam, token)}>
        <StyledImageContainer>
          <img src={icon} alt={name} />
        </StyledImageContainer>

        <StyledTextContainer>
          <StyledHeader>{name}</StyledHeader>

          <StyledSubheaderContainer>
            <StyledStatus>Active</StyledStatus>
            <StyledDate>Profile requested on 20 July 2019</StyledDate>
            <StyledDescription>{description}</StyledDescription>
          </StyledSubheaderContainer>
        </StyledTextContainer>
      </StyledLink>
    </StyledRow>
  )
}

export default App
