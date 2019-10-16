import React from 'react'

import * as routes from '../../../../../consts/routes'
import { App as AppType } from '../../../../../types/apps'
import {
  StyledHeader,
  StyledImageContainer,
  StyledLink,
  StyledRow,
  StyledSubheader,
  StyledTextContainer,
} from './StyledApp'

export interface AppProps extends AppType {
  token: string
}

const App: React.FC<AppProps> = ({ token, description, name, icon }) => {
  return (
    <StyledRow>
      <StyledLink to={routes.appDetails.replace(routes.tokenParam, token)}>
        <StyledImageContainer>
          <img src={icon} alt={name} />
        </StyledImageContainer>
        <StyledTextContainer>
          <StyledHeader>{name}</StyledHeader>
          <StyledSubheader>{description}</StyledSubheader>
        </StyledTextContainer>
      </StyledLink>
    </StyledRow>
  )
}

export default App
