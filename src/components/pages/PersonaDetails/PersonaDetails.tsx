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
  About,
  AppsAddAppText,
  AppsContainer,
  AppsHeader,
  AppsList,
  BackButton,
  DeleteDivider,
  DeleteHeader,
  DeleteText,
  FormContainer,
  FormData,
  FormDataRow,
  FormDataRowHeader,
  HeaderDivider,
  ImagesContainer,
  NameHeader,
  PhotoButton,
  PhotoContainer,
  PictureButton,
  PictureContainer,
  TopContainerLabel,
} from './Styled'

export interface EditPersonaMatch {
  personaid: string
}

export interface PersonaDetailsProps extends RouteComponentProps<EditPersonaMatch> {
  personaName: string
  givenName: string
  about: string
  email: string
  telephone: string
  address: string
  apps: Apps
  photo: string
  picture: string
  loadPersona: (personaId: string) => void
  loadApps: (personaId: string) => void
  unsetRedirect: () => void
}

const PersonaDetails: React.FC<PersonaDetailsProps> = ({
  personaName,
  givenName,
  about,
  email,
  telephone,
  address,
  apps,
  photo,
  picture,
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

  return (
    <SidebarContainer>
      <Column size={6}>
        <MobileTopBarContainer>
          <BackButton onClick={history.goBack}>
            <Icon type="arrowLeft" width="20px" height="20px" color={theme.colors.dark} />
          </BackButton>
          <TopContainerLabel>{personaName}</TopContainerLabel>
          <NavLink to={routes.editPersona.replace(routes.personaIdParam, match.params.personaid)}>
            <Icon type="edit" width="20px" height="20px" color={theme.colors.dark} />
          </NavLink>
        </MobileTopBarContainer>

        <ImagesContainer>
          <PictureContainer>
            <img src={picture} alt={givenName} />
          </PictureContainer>

          <PhotoContainer>
            <img src={photo} alt={givenName} />
          </PhotoContainer>

          <PictureButton>
            <Camera size="16px" color={theme.colors.white} /> Change Cover
          </PictureButton>
          <PhotoButton>
            <Camera size="16px" color={theme.colors.white} />
          </PhotoButton>
        </ImagesContainer>

        <FormContainer>
          <NameHeader>{personaName}</NameHeader>
          <About>{about}</About>
          <HeaderDivider />
          <FormData>
            <FormDataRow>
              <FormDataRowHeader>Email</FormDataRowHeader>
              <span>{email}</span>
            </FormDataRow>
            <FormDataRow>
              <FormDataRowHeader>Phone number</FormDataRowHeader>
              <span>{telephone}</span>
            </FormDataRow>
            <FormDataRow>
              <FormDataRowHeader>Location</FormDataRowHeader>
              <span>{address}</span>
            </FormDataRow>
          </FormData>

          <AppsContainer>
            <AppsHeader withApps={appsCount > 0}>
              {appsCount === 0 && 'Use your persona'}
              {appsCount > 0 && `Persona used in ${appsCount} applications`}
            </AppsHeader>

            {appsCount > 0 && (
              <AppsList>
                {Object.entries(apps).map(([appId, app]) => (
                  <App key={appId} id={appId} {...app} />
                ))}
              </AppsList>
            )}

            <AppsAddAppText>Add a new third party application</AppsAddAppText>
            <Button fullWidth={true} buttonType="primary" onClick={() => {}}>
              Scan QR code
            </Button>
          </AppsContainer>

          <DeleteDivider />

          <DeleteHeader>Delete persona</DeleteHeader>
          <DeleteText>This will revoke access to the third-party app</DeleteText>

          <Button
            buttonType="alert"
            onClick={() =>
              history.push(
                routes.deletePersona.replace(routes.personaIdParam, match.params.personaid),
              )
            }
          >
            Delete Persona
          </Button>
        </FormContainer>
      </Column>
    </SidebarContainer>
  )
}

export default withRouter(PersonaDetails)
