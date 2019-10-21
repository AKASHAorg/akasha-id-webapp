import React, { useEffect } from 'react'

import Button from '@akashaproject/design-system/dist/components/Button'
import { Apps as AppsType } from '../../../types/apps'
import { AppsList } from '../../shared/AppsList'
import { MobileBottomBar } from '../../shared/MobileBottomBar'
import { MobileTopBar } from '../../shared/MobileTopBar'
import { Column } from '../shared/Container'
import { SidebarContainer } from '../shared/SidebarContainer'
import {
  AppsHeader,
  MobileAppsHeader,
  MobileAppsHeaderContainer,
  NoAppsContainer,
  NoAppsHeader,
  NoAppsLogo,
  NoAppsSubheader,
  PageContainer,
} from './StyledApps'

export interface AppsProps {
  apps: AppsType
  loadApps: () => void
}

const Apps: React.FC<AppsProps> = ({ apps, loadApps }) => {
  useEffect(() => {
    loadApps()
  }, [loadApps])

  return (
    <SidebarContainer>
      <MobileTopBar />

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

          {Object.entries(apps).length > 0 && <AppsList apps={apps} />}
        </PageContainer>
      </Column>

      <MobileBottomBar />
    </SidebarContainer>
  )
}

export default Apps
