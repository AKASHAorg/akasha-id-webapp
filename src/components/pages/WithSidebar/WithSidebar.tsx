import Toolbar from '@akashaproject/design-system/dist/components/Toolbar'
import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const ToolbarContainer = styled.div`
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 12px;
`

const ContentContainer = styled.div`
  margin-left: 200px;
`

const WithSidebar: React.FC<React.PropsWithChildren<any>> = ({ children }) => {
  return (
    <>
      <ToolbarContainer>
        <Toolbar
          avatar={false}
          topIcons={[
            <NavLink key="apps" to="/apps">
              Applications
            </NavLink>,
            <NavLink key="devices" to="/devices">
              Devices
            </NavLink>,
            <NavLink key="profile" to="/profile">
              Profile
            </NavLink>,
          ]}
          bottomIcons={[]}
          sidebarContentMap={[]}
        />
      </ToolbarContainer>
      <ContentContainer>{children}</ContentContainer>
    </>
  )
}

export default WithSidebar
