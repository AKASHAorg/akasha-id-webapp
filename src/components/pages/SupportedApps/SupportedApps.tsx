import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import { translation } from '../../../consts/i18n'
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

  const { t } = useTranslation()

  return (
    <SidebarContainer>
      <MobileTopBar />

      <Column size={6}>
        <PageContainer>
          <MobileTopBarWithArrowCancelButton>
            {t(translation.mobilePageTitles.supportedApps)}
          </MobileTopBarWithArrowCancelButton>

          {Object.entries(apps).length > 0 && <AppsList apps={apps} />}
        </PageContainer>
      </Column>
    </SidebarContainer>
  )
}

export default SupportedApps
