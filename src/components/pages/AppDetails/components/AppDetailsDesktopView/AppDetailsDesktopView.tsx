import Checkbox from '@akashaproject/design-system/dist/components/Checkbox'
import Icon from '@akashaproject/design-system/dist/components/Icon'
import AkashaThemeContext from '@akashaproject/design-system/dist/providers/ThemeProvider'
import { DocumentText } from 'grommet-icons'
import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next'

import { appDetails, translation } from '../../../../../consts/i18n'
import { APP_DETAILS } from '../../../../../consts/i18n-ns'
import { App } from '../../../../../types/apps'
import { Column } from '../../../shared/Container'
import {
  AttributesHeader,
  AttributesList,
  AttributesRow,
  DateContainer,
  Description,
  DescriptionContainer,
  DescriptionHeader,
  DesktopContainer,
  Divider,
  HeaderContainer,
  ImageContainer,
  Link,
  Name,
  NameContainer,
  RemoveButton,
  RemoveContainer,
  RemoveHeader,
  RemoveHeaderContainer,
  RemoveSubheader,
  Status,
  SubheaderContainer,
} from './Styled'

export interface AppDetailsDesktopViewProps {
  app: App
  startRemoveApp: () => void
}

const AppDetailsDesktopView: React.FC<AppDetailsDesktopViewProps> = ({ app, startRemoveApp }) => {
  const theme = useContext(AkashaThemeContext)

  const { t } = useTranslation(APP_DETAILS)

  return (
    <DesktopContainer>
      <HeaderContainer>
        <ImageContainer src={app.appInfo.icon} alt={app.appInfo.name} />

        <NameContainer>
          <Name>{app.appInfo.name}</Name>
          <SubheaderContainer>
            <Status>{t(translation.appStatus.active)}</Status>
            <DateContainer>{t(appDetails.requestDate, { date: '20 July 2019' })}</DateContainer>
          </SubheaderContainer>
        </NameContainer>
      </HeaderContainer>

      <DescriptionContainer>
        <Column size={4}>
          <DescriptionHeader>
            <DocumentText color="dark-1" size="20px" />
            <div>{t(appDetails.about)}</div>
          </DescriptionHeader>
          <Description>{app.appInfo.description}</Description>
        </Column>

        <Column size={2}>
          <DescriptionHeader>
            <Icon type="linkEntry" color={theme.colors.dark} width="16px" height="16px" />
            <div>{t(appDetails.link)}</div>
          </DescriptionHeader>
          <Link href={app.appInfo.url}>{app.appInfo.url}</Link>
        </Column>
      </DescriptionContainer>

      <Divider />

      <Column size={4}>
        <AttributesHeader>{t(appDetails.sharingAttributes)}</AttributesHeader>

        <AttributesList>
          {Object.entries(app.attributes).map(([attribute, checked]) => (
            <AttributesRow key={attribute}>
              <Checkbox checked={checked} label={t((translation.attributes as any)[attribute])} />
            </AttributesRow>
          ))}
        </AttributesList>
      </Column>

      <Divider />

      <RemoveContainer>
        <RemoveHeaderContainer>
          <RemoveHeader>{t(appDetails.removeAccess.header)}</RemoveHeader>
          <RemoveSubheader>{t(appDetails.removeAccess.subheader)}</RemoveSubheader>
        </RemoveHeaderContainer>
        <RemoveButton buttonType="primary" onClick={startRemoveApp}>
          {t(appDetails.removeAccess.button)}
        </RemoveButton>
      </RemoveContainer>
    </DesktopContainer>
  )
}

export default AppDetailsDesktopView
