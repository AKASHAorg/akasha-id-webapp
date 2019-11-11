import React from 'react'
import { useTranslation } from 'react-i18next'
import { RouteComponentProps, withRouter } from 'react-router-dom'

import Button from '@akashaproject/design-system/dist/components/Button'
import { appDetails, translation } from '../../../../../consts/i18n'
import { APP_DETAILS } from '../../../../../consts/i18n-ns'
import * as routes from '../../../../../consts/routes'
import { App } from '../../../../../types/apps'
import { PersonaData } from '../../../../../types/users'
import { MobileTopBarWithArrowCancelButton } from '../../../../shared/MobileTopBarWithArrowCancelButton'
import { Toggle } from '../../../../shared/Toggle'
import {
  About,
  AttributesContainer,
  AttributesDivider,
  AttributesHeader,
  AttributesImageContainer,
  AttributesLabelContainer,
  AttributesList,
  AttributesRow,
  AttributesText,
  AttributesValue,
  ButtonsContainer,
  ButtonsDivider,
  ButtonsHeader,
  ButtonsText,
  ChangesContainer,
  FormContainer,
  ImagesContainer,
  MobileContainer,
  NameHeader,
  PersonaContainer,
  PersonaLink,
  PersonaName,
  PhotoContainer,
  PictureContainer,
  SiteButton,
  SiteContainer,
  SiteLabel,
  SiteText,
  SiteTitleContainer,
} from './Styled'

import leaveIcon from './leave.svg'

export interface AppDetailsMobileViewProps extends RouteComponentProps<any> {
  app: App
  persona: PersonaData
}

const AppDetailsMobileView: React.FC<AppDetailsMobileViewProps> = ({ app, persona, history }) => {
  const { t } = useTranslation(APP_DETAILS)

  return (
    <MobileContainer>
      <MobileTopBarWithArrowCancelButton>{app.appInfo.name}</MobileTopBarWithArrowCancelButton>

      <ImagesContainer>
        <PictureContainer src={app.appInfo.icon} alt={app.appInfo.icon} />

        <PhotoContainer src={app.appInfo.icon} alt={app.appInfo.icon} />
      </ImagesContainer>

      <FormContainer>
        <NameHeader>{app.appInfo.name}</NameHeader>
        <About>{app.appInfo.description}</About>

        <SiteContainer>
          <SiteTitleContainer>
            <SiteLabel>{t(appDetails.website.label)}</SiteLabel>
            <SiteText>{app.appInfo.url}</SiteText>
          </SiteTitleContainer>
          <SiteButton href={app.appInfo.url}>
            {t(appDetails.website.button)}
            <img src={leaveIcon} alt="Visit website" />
          </SiteButton>
        </SiteContainer>

        <AttributesContainer>
          <PersonaContainer>
            <PersonaName>{persona.personaName}</PersonaName>
            <PersonaLink to={routes.personaDetails.replace(routes.personaIdParam, app.persona)}>
              {t(appDetails.viewPersona)}
            </PersonaLink>
          </PersonaContainer>

          <AttributesDivider />

          <AttributesText>
            {t(appDetails.attributesHeader, { appName: app.appInfo.name })}
          </AttributesText>

          <AttributesList>
            {Object.entries(app.attributes).map(([attribute, checked]) => (
              <AttributesRow key={attribute}>
                {(attribute === 'photo' || attribute === 'picture') && (
                  <>
                    <AttributesImageContainer
                      src={(persona as any)[attribute]}
                      alt={t((translation.attributes as any)[attribute])}
                    />
                    <AttributesLabelContainer>
                      <AttributesHeader>
                        {t((translation.attributes as any)[attribute])}
                      </AttributesHeader>
                    </AttributesLabelContainer>
                  </>
                )}
                {attribute !== 'photo' && attribute !== 'picture' && (
                  <AttributesLabelContainer>
                    <AttributesHeader>
                      {t((translation.attributes as any)[attribute])}
                    </AttributesHeader>
                    <AttributesValue>{(persona as any)[attribute]}</AttributesValue>
                  </AttributesLabelContainer>
                )}

                <Toggle
                  checked={checked}
                  onChange={() => {}}
                  onFocus={() => {}}
                  onBlur={() => {}}
                />
              </AttributesRow>
            ))}
          </AttributesList>
        </AttributesContainer>

        <ButtonsDivider />

        <ButtonsContainer>
          <ButtonsHeader>{t(appDetails.unlinkPersona.header)}</ButtonsHeader>

          <ButtonsText>{t(appDetails.unlinkPersona.text)}</ButtonsText>

          <Button
            buttonType="alert"
            onClick={() => {
              history.push(routes.unlinkPersona.replace(routes.tokenParam, app.id))
            }}
          >
            {t(appDetails.unlinkPersona.button)}
          </Button>
        </ButtonsContainer>
      </FormContainer>

      <ChangesContainer>
        <Button
          buttonType="primary"
          fullWidth={true}
          onClick={() => {
            history.push(routes.discardChanges)
          }}
        >
          {t(appDetails.saveChanges)}
        </Button>
      </ChangesContainer>
    </MobileContainer>
  )
}

export default withRouter(AppDetailsMobileView)
