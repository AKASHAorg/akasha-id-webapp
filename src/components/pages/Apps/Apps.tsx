import Button from '@akashaproject/design-system/dist/components/Button'
import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import { translation } from '../../../consts/i18n'
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

import noApps from './no-apps.png'
import scanQrIcon from './scan-qr.svg'

export interface AppsProps {
  apps: AppsType
  loadApps: () => void
}

const Apps: React.FC<AppsProps> = ({ apps, loadApps }) => {
  useEffect(() => {
    loadApps()
  }, [loadApps])

  const { t } = useTranslation()

  return (
    <SidebarContainer>
      <MobileTopBar />

      <Column size={6}>
        <PageContainer>
          <AppsHeader>{t(translation.desktopPageTitles.apps)}</AppsHeader>

          <MobileAppsHeaderContainer>
            <MobileAppsHeader>{t(translation.mobilePageTitles.apps)}</MobileAppsHeader>
            <Button buttonType="primary" small={true} onClick={() => {}}>
              <img src={scanQrIcon} alt="Scan QR code" />
              {t(translation.scanQRCode)}
            </Button>
          </MobileAppsHeaderContainer>

          {Object.entries(apps).length === 0 && (
            <NoAppsContainer>
              <NoAppsLogo>
                <img src={noApps} alt="No apps" />
              </NoAppsLogo>
              <NoAppsHeader>{t(translation.noApps.header)}</NoAppsHeader>
              <NoAppsSubheader>{t(translation.noApps.subheader)}</NoAppsSubheader>
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
