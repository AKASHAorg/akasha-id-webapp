import Button from '@akashaproject/design-system/dist/components/Button'
import Icon from '@akashaproject/design-system/dist/components/Icon'
import AkashaThemeContext from '@akashaproject/design-system/dist/providers/ThemeProvider'
import { Camera } from 'grommet-icons'
import React, { useContext, useEffect } from 'react'
import { NavLink, RouteComponentProps, withRouter } from 'react-router-dom'

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

  const theme = useContext(AkashaThemeContext)

  const appsCount = Object.keys(apps).length
  const editPersonaRoute = routes.editPersona.replace(routes.personaIdParam, match.params.personaid)

  return (
    <SidebarContainer>
      <Column size={6}>
        <MobileTopBarContainer>
          <BackButton onClick={history.goBack}>
            <Icon type="arrowLeft" width="20px" height="20px" color={theme.colors.dark} />
          </BackButton>
          <TopContainerLabel>{personaName}</TopContainerLabel>
          <NavLink to={editPersonaRoute.replace(routes.promptParam, '')}>
            <Icon type="edit" width="20px" height="20px" color={theme.colors.dark} />
          </NavLink>
        </MobileTopBarContainer>

        <ImagesContainer>
          <CoverImageContainer src={coverImage} alt={personaName} />
          <AvatarContainer src={avatar} alt={personaName} />

          <PictureButton
            onClick={() => history.push(editPersonaRoute.replace(routes.promptParam, 'coverImage'))}
          >
            <Camera size="16px" color={theme.colors.white} /> Change Cover
          </PictureButton>
          <PhotoButton
            onClick={() => history.push(editPersonaRoute.replace(routes.promptParam, 'avatar'))}
          >
            <Camera size="16px" color={theme.colors.white} />
          </PhotoButton>
        </ImagesContainer>

        <FormContainer>
          <NameHeader>{personaName}</NameHeader>
          <Description>{description}</Description>
          <HeaderDivider />
          <FormData>
            <FormDataRow>
              <FormDataRowHeader>Name</FormDataRowHeader>
              <span>{name}</span>
            </FormDataRow>
            <FormDataRow>
              <FormDataRowHeader>Email</FormDataRowHeader>
              <span>{email}</span>
            </FormDataRow>
            <FormDataRow>
              <FormDataRowHeader>Phone number</FormDataRowHeader>
              <span>{ethAddress}</span>
            </FormDataRow>
            <FormDataRow>
              <FormDataRowHeader>Location</FormDataRowHeader>
              <span>{address}</span>
            </FormDataRow>
          </FormData>

          <AppsContainer>
            <AppsHeader withApps={appsCount > 0}>
              {appsCount === 0 && 'Not used by any app yet'}
              {appsCount > 0 && `Persona used in ${appsCount} applications`}
            </AppsHeader>

            {appsCount > 0 && (
              <AppsList>
                {apps.map(app => (
                  <App key={app.id} id={app.id} {...app} />
                ))}
              </AppsList>
            )}

            <AppsAddAppText>Add a new third party application</AppsAddAppText>
            <Button
              fullWidth={true}
              buttonType="primary"
              onClick={() => {
                history.push(routes.qrCode)
              }}
            >
              Scan QR code
            </Button>
          </AppsContainer>

          <DeleteDivider />

          <DeleteHeader>Delete persona</DeleteHeader>
          <DeleteText>This will revoke access to the third-party app</DeleteText>

          <Button
            buttonType="alert"
            onClick={() => {
              history.push(
                routes.deletePersona.replace(routes.personaIdParam, match.params.personaid),
              )
            }}
          >
            Delete Persona
          </Button>
        </FormContainer>
      </Column>
    </SidebarContainer>
  )
}

export default withRouter(PersonaDetails)
