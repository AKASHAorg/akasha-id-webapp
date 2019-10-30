import React, { useEffect } from 'react'

import { Apps as AppsType } from '../../../types/apps'
import { AppsList } from '../../shared/AppsList'
import { MobileTopBar } from '../../shared/MobileTopBar'
import { MobileTopBarWithArrowCancelButton } from '../../shared/MobileTopBarWithArrowCancelButton'
import { Column } from '../shared/Container'
import { SidebarContainer } from '../shared/SidebarContainer'
import { PageContainer } from './Styled'

export interface SupportedAppsProps {
  apps: AppsType
  loadApps: () => void
}

const SupportedApps: React.FC<SupportedAppsProps> = ({ apps, loadApps }) => {
  useEffect(() => {
    loadApps()
  }, [loadApps])

  return (
    <SidebarContainer>
      <MobileTopBar />

      <Column size={6}>
        <PageContainer>
          <MobileTopBarWithArrowCancelButton>Supported Apps</MobileTopBarWithArrowCancelButton>

          {Object.entries(apps).length > 0 && <AppsList apps={apps} />}
        </PageContainer>
      </Column>
    </SidebarContainer>
  )
}

export default SupportedApps
