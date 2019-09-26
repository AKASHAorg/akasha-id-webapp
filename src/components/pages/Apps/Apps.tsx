import React, { useEffect } from 'react'
import styled from 'styled-components'

import { App as AppType } from '../../../types/apps'
import { Column } from '../shared/Container'
import { Sidebar } from '../shared/Sidebar'
import { SidebarContainer } from '../shared/SidebarContainer'
import { App } from './components/App'

export interface AppsProps {
  apps: { [token: string]: AppType }
  loadApps: () => void
}

const StyledList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: row;
  display: flex;
  flex-wrap: wrap;
`

const Apps: React.FC<AppsProps> = ({ apps, loadApps }) => {
  useEffect(() => {
    loadApps()
  }, [loadApps])
  return (
    <SidebarContainer sidebar={<Sidebar />}>
      <Column size={14}>
        <StyledList>
          {Object.entries(apps).map(([token, app]: [string, AppType]) => (
            <App key={token} token={token} {...app} />
          ))}
        </StyledList>
      </Column>
    </SidebarContainer>
  )
}

export default Apps