import Button from '@akashaproject/design-system/dist/components/Button'
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

interface WithSidebarProps {
  onSignOut: () => void
}

const WithSidebar: React.FC<React.PropsWithChildren<WithSidebarProps>> = ({
  onSignOut,
  children,
}) => {
  return (
    <>
      <ToolbarContainer>
        <Toolbar
          avatar={false}
          topIcons={[
            <NavLink key="apps" to="/apps">
              Applications
            </NavLink>,
            <NavLink key="profile" to="/profile">
              Profile
            </NavLink>,
          ]}
          bottomIcons={[
            <Button key="sign-out" buttonType="alert" onClick={onSignOut}>
              Sign out
            </Button>,
          ]}
          sidebarContentMap={[]}
        />
      </ToolbarContainer>
      <ContentContainer>{children}</ContentContainer>
    </>
  )
}

export default WithSidebar
