import Button from '@akashaproject/design-system/dist/components/Button'
import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { NavLink, RouteComponentProps, withRouter } from 'react-router-dom'

import { personaDetails, translation } from '../../../consts/i18n'
import { PERSONA_DETAILS } from '../../../consts/i18n-ns'
import * as routes from '../../../consts/routes'
import { Apps } from '../../../types/apps'
import { MobileTopBarContainer } from '../../shared/MobileTopBarContainer'
import { Column } from '../shared/Container'
import { SidebarContainer } from '../shared/SidebarContainer'
import { App } from './components/App'
import {
  AppsAddAppText,
  AppsContainer,
  AppsHeader,
  AppsList,
  AvatarContainer,
  BackButton,
  CoverImageContainer,
  DeleteDivider,
  DeleteHeader,
  DeleteText,
  Description,
  FormContainer,
  FormData,
  FormDataRow,
  FormDataRowHeader,
  HeaderDivider,
  ImagesContainer,
  NameHeader,
  PhotoButton,
  PictureButton,
  TopContainerLabel,
} from './Styled'

import arrowIcon from './arrow.svg'
import cameraIcon from './camera.svg'
import editIcon from './edit.svg'
import scanQrIcon from './scan-qr.svg'

export interface EditPersonaMatch {
  personaid: string
}

export interface PersonaDetailsProps extends RouteComponentProps<EditPersonaMatch> {
  personaName: string
  avatar: string
  name: string
  description: string
  coverImage: string
  email: string
  url: string
  address: string
  ethAddress: string
  apps: Apps
  loadPersona: (personaId: string) => void
  loadApps: (personaId: string) => void
  unsetRedirect: () => void
}

const PersonaDetails: React.FC<PersonaDetailsProps> = ({
  personaName,
  avatar,
  name,
  description,
  coverImage,
  email,
  url,
  address,
  ethAddress,
  apps,
  loadPersona,
  loadApps,
  unsetRedirect,
  history,
  match,
}) => {
  useEffect(() => {
    loadPersona(match.params.personaid)
  }, [loadPersona, match.params.personaid])

  useEffect(() => {
    loadApps(match.params.personaid)
  }, [loadApps, match.params.personaid])

  useEffect(() => {
    unsetRedirect()
  }, [unsetRedirect])

  const appsCount = Object.keys(apps).length
  const editPersonaRoute = routes.editPersona.replace(routes.personaIdParam, match.params.personaid)

  const { t } = useTranslation(PERSONA_DETAILS)

  return (
    <SidebarContainer>
      <Column size={6}>
        <MobileTopBarContainer>
          <BackButton onClick={history.goBack}>
            <img src={arrowIcon} alt="Back" />
          </BackButton>
          <TopContainerLabel>{personaName}</TopContainerLabel>
          <NavLink to={editPersonaRoute}>
            <img src={editIcon} alt="Edit" />
          </NavLink>
        </MobileTopBarContainer>

        <ImagesContainer>
          <CoverImageContainer src={coverImage} alt={personaName} />
          <AvatarContainer src={avatar} alt={personaName} />

          <PictureButton onClick={() => history.push(editPersonaRoute)}>
            <img src={cameraIcon} alt="Edit" />
            {t(personaDetails.changeCover)}
          </PictureButton>
          <PhotoButton onClick={() => history.push(editPersonaRoute)}>
            <img src={cameraIcon} alt="Edit" />
          </PhotoButton>
        </ImagesContainer>

        <FormContainer>
          <NameHeader>{personaName}</NameHeader>
          <Description>{description}</Description>
          <HeaderDivider />
          <FormData>
            <FormDataRow>
              <FormDataRowHeader>{t(translation.attributes.name)}</FormDataRowHeader>
              <span>{name}</span>
            </FormDataRow>
            <FormDataRow>
              <FormDataRowHeader>{t(translation.attributes.email)}</FormDataRowHeader>
              <span>{email}</span>
            </FormDataRow>
            <FormDataRow>
              <FormDataRowHeader>{t(translation.attributes.ethAddress)}</FormDataRowHeader>
              <span>{ethAddress}</span>
            </FormDataRow>
            <FormDataRow>
              <FormDataRowHeader>{t(translation.attributes.address)}</FormDataRowHeader>
              <span>{address}</span>
            </FormDataRow>
          </FormData>

          <AppsContainer>
            <AppsHeader withApps={appsCount > 0}>
              {appsCount === 0 && t(personaDetails.notUsed)}
              {appsCount > 0 && t(personaDetails.usedIn, { appsCount })}
            </AppsHeader>

            {appsCount > 0 && (
              <AppsList>
                {apps.map(app => (
                  <App key={app.id} id={app.id} {...app} />
                ))}
              </AppsList>
            )}

            <AppsAddAppText>{t(personaDetails.addApp)}</AppsAddAppText>
            <Button
              fullWidth={true}
              buttonType="primary"
              onClick={() => {
                history.push(routes.qrCode)
              }}
            >
              <img src={scanQrIcon} alt="Scan QR codde" />
              {t(translation.scanQRCode)}
            </Button>
          </AppsContainer>

          <DeleteDivider />

          <DeleteHeader>{t(personaDetails.deletePersona.header)}</DeleteHeader>
          <DeleteText>{t(personaDetails.deletePersona.text)}</DeleteText>

          <Button
            buttonType="alert"
            onClick={() => {
              history.push(
                routes.deletePersona.replace(routes.personaIdParam, match.params.personaid),
              )
            }}
          >
            {t(personaDetails.deletePersona.button)}
          </Button>
        </FormContainer>
      </Column>
    </SidebarContainer>
  )
}

export default withRouter(PersonaDetails)
