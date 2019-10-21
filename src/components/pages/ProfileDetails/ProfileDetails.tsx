import Button from '@akashaproject/design-system/dist/components/Button'
import Icon from '@akashaproject/design-system/dist/components/Icon'
import AkashaThemeContext from '@akashaproject/design-system/dist/providers/ThemeProvider'
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

export interface ProfileDetailsProps extends RouteComponentProps<any> {
  name: string
  givenName: string
  about: string
  email: string
  telephone: string
  address: string
  apps: Apps
  photo: string
  picture: string
  loadProfile: () => void
  loadApps: () => void
}

const ProfileDetails: React.FC<ProfileDetailsProps> = ({
  name,
  givenName,
  about,
  email,
  telephone,
  address,
  apps,
  photo,
  picture,
  loadProfile,
  loadApps,
  history,
}) => {
  useEffect(() => {
    loadProfile()
    loadApps()
  }, [loadProfile, loadApps])
  const theme = useContext(AkashaThemeContext)

  const appsCount = Object.keys(apps).length

  return (
    <SidebarContainer>
      <Column size={6}>
        <MobileTopBarContainer>
          <BackButton onClick={history.goBack}>
            <Icon type="back" width="20px" height="20px" color={theme.colors.dark} />
          </BackButton>
          <TopContainerLabel>{name}</TopContainerLabel>
          <NavLink to={routes.editProfile}>
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

          <PictureButton>Change Cover</PictureButton>
          <PhotoButton>q</PhotoButton>
        </ImagesContainer>

        <FormContainer>
          <NameHeader>{name}</NameHeader>
          <About>{about}</About>
          <HeaderDivider />
          <FormData>
            <FormDataRow>
              <FormDataRowHeader>Email</FormDataRowHeader>
              <span>Email {email}</span>
            </FormDataRow>
            <FormDataRow>
              <FormDataRowHeader>Phone number</FormDataRowHeader>
              <span>Telephone {telephone}</span>
            </FormDataRow>
            <FormDataRow>
              <FormDataRowHeader>Location</FormDataRowHeader>
              <span>Address {address}</span>
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

          <Button buttonType="alert" onClick={() => history.push(routes.deleteProfile)}>
            Delete Persona
          </Button>
        </FormContainer>
      </Column>
    </SidebarContainer>
  )
}

export default withRouter(ProfileDetails)
