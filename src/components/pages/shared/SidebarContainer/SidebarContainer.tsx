import React from 'react'
import StyledColumnContainer from './StyledColumnContainer'
import StyledContainer from './StyledContainer'
import StyledSidebarContainer from './StyledSidebarContainer'

interface SidebarContainerProps extends React.PropsWithChildren<any> {
  sidebar: React.ReactNode
}

const SidebarContainer: React.FC<SidebarContainerProps> = ({ sidebar, children }) => (
  <StyledContainer>
    <StyledSidebarContainer>{sidebar}</StyledSidebarContainer>
    <StyledColumnContainer>{children}</StyledColumnContainer>
  </StyledContainer>
)

export default SidebarContainer
