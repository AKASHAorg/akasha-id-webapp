import React from 'react'
import { NavLink } from 'react-router-dom'

import * as routes from '../../../../consts/routes'
import { Container } from '../Container'
import { Sidebar } from './components/Sidebar'
import {
  StyledContentContainer,
  StyledContentWrapper,
  StyledSidebarContainer,
  StyledTopBar,
} from './StyledSidebarContainer'

interface SidebarContainerProps extends React.PropsWithChildren<any> {
  name: string
}

const SidebarContainer: React.FC<SidebarContainerProps> = ({ name, children }) => (
  <Container>
    <StyledSidebarContainer>
      <Sidebar />
    </StyledSidebarContainer>

    <StyledContentContainer>
      <StyledTopBar>
        <NavLink to={routes.account}>{name}</NavLink>
      </StyledTopBar>
      <StyledContentWrapper>{children}</StyledContentWrapper>
    </StyledContentContainer>
  </Container>
)

export default SidebarContainer
