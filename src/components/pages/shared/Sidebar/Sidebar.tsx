import Button from '@akashaproject/design-system/dist/components/Button'
import Toolbar from '@akashaproject/design-system/dist/components/Toolbar'
import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

import * as routes from '../../../../consts/routes'

const ToolbarContainer = styled.div`
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 12px;
`

interface WithSidebarProps {
  onSignOut: () => void
}

const WithSidebar: React.FC<WithSidebarProps> = ({ onSignOut }) => {
  return (
    <ToolbarContainer>
      <Toolbar
        avatar={false}
        topIcons={[
          <NavLink key="apps" to={routes.apps}>
            Applications
          </NavLink>,
          <NavLink key="profile" to={routes.profile}>
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
  )
}

export default WithSidebar
