import React, { useEffect } from 'react'

import Button from '@akashaproject/design-system/dist/components/Button'
import { App as AppType, AppsList } from '../../../types/apps'
import { MobileBottomContainer } from '../../shared/MobileBottomContainer'
import { MobileTopContainer } from '../../shared/MobileTopContainer'
import { Column } from '../shared/Container'
import { SidebarContainer } from '../shared/SidebarContainer'
import { App } from './components/App'
import {
  AppsHeader,
  MobileAppsHeader,
  MobileAppsHeaderContainer,
  NoAppsContainer,
  NoAppsHeader,
  NoAppsLogo,
  NoAppsSubheader,
  PageContainer,
  StyledAppsList,
} from './StyledApps'

export interface AppsProps {
  apps: AppsList
  loadApps: () => void
}

const Apps: React.FC<AppsProps> = ({ apps, loadApps }) => {
  useEffect(() => {
    loadApps()
  }, [loadApps])
  return (
    <SidebarContainer>
      <MobileTopContainer />

      <Column size={6}>
        <PageContainer>
          <AppsHeader>My applications</AppsHeader>

          <MobileAppsHeaderContainer>
            <MobileAppsHeader>Applications</MobileAppsHeader>
            <Button buttonType="primary" small={true} onClick={() => {}}>
              Scan QR code
            </Button>
          </MobileAppsHeaderContainer>

          {Object.entries(apps).length === 0 && (
            <NoAppsContainer>
              <NoAppsLogo />
              <NoAppsHeader>Add your first application</NoAppsHeader>
              <NoAppsSubheader>
                Here will say somethin relevant about AKASHA ID and how it works.
              </NoAppsSubheader>
            </NoAppsContainer>
          )}

          {Object.entries(apps).length > 0 && (
            <StyledAppsList>
              {Object.entries(apps).map(([token, app]: [string, AppType]) => (
                <App key={token} token={token} {...app} />
              ))}
            </StyledAppsList>
          )}
        </PageContainer>
      </Column>

      <MobileBottomContainer />
    </SidebarContainer>
  )
}

export default Apps
