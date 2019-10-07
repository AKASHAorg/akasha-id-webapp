import React, { useEffect } from 'react'

import { App as AppType } from '../../../types/apps'
import { Column } from '../shared/Container'
import { SidebarContainer } from '../shared/SidebarContainer'
import { App } from './components/App'
import { AppsHeader, StyledAppsList } from './StyledApps'

export interface AppsProps {
  apps: { [token: string]: AppType }
  loadApps: () => void
}

const Apps: React.FC<AppsProps> = ({ apps, loadApps }) => {
  useEffect(() => {
    loadApps()
  }, [loadApps])

  return (
    <SidebarContainer>
      <Column size={6}>
        <AppsHeader>My applications</AppsHeader>
        <StyledAppsList>
          {Object.entries(apps).map(([token, app]: [string, AppType]) => (
            <App key={token} token={token} {...app} />
          ))}
        </StyledAppsList>
      </Column>
    </SidebarContainer>
  )
}

export default Apps
