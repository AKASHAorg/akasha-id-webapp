import React from 'react'

import { Column } from '../shared/Container'
import { SidebarContainer } from '../shared/SidebarContainer'
import { AccountForm } from './components/AccountForm'

const Account: React.FC<{}> = () => (
  <SidebarContainer>
    <Column size={3}>
      <AccountForm />
    </Column>
  </SidebarContainer>
)

export default Account
