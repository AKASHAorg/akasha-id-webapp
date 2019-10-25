import Checkbox from '@akashaproject/design-system/dist/components/Checkbox'
import React from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'

import Button from '@akashaproject/design-system/dist/components/Button'
import * as routes from '../../../../../consts/routes'
import { App, Claim } from '../../../../../types/apps'
import { ProfileData } from '../../../../../types/users'
import { MobileTopBarWithArrowCancelButton } from '../../../../shared/MobileTopBarWithArrowCancelButton'
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
  PhotoContainer,
  PictureContainer,
  ProfileContainer,
  ProfileLink,
  ProfileName,
  SiteButton,
  SiteContainer,
  SiteLabel,
  SiteText,
  SiteTitleContainer,
} from './Styled'

export interface AppDetailsMobileViewProps extends RouteComponentProps<any> {
  app: App
  claim: Claim
  userName: string
  profile: ProfileData
}

const AppDetailsMobileView: React.FC<AppDetailsMobileViewProps> = ({
  app,
  claim,
  userName,
  profile,
  history,
}) => {
  return (
    <MobileContainer>
      <MobileTopBarWithArrowCancelButton>{app.name}</MobileTopBarWithArrowCancelButton>

      <ImagesContainer>
        <PictureContainer>
          <img src={app.icon} alt={app.icon} />
        </PictureContainer>

        <PhotoContainer>
          <img src={app.icon} alt={app.icon} />
        </PhotoContainer>
      </ImagesContainer>

      <FormContainer>
        <NameHeader>{app.name}</NameHeader>
        <About>{app.description}</About>

        <SiteContainer>
          <SiteTitleContainer>
            <SiteLabel>Website</SiteLabel>
            <SiteText>{app.url}</SiteText>
          </SiteTitleContainer>
          <SiteButton href={app.url}>Visit Website</SiteButton>
        </SiteContainer>

        <AttributesContainer>
          <ProfileContainer>
            <ProfileName>{userName}</ProfileName>
            <ProfileLink to={routes.profileDetails}>View Persona</ProfileLink>
          </ProfileContainer>

          <AttributesDivider />

          <AttributesText>{app.name} has access to the following attributes:</AttributesText>

          <AttributesList>
            <AttributesRow>
              <AttributesLabelContainer>
                <AttributesHeader>Name</AttributesHeader>
                <AttributesValue>{profile.givenName}</AttributesValue>
              </AttributesLabelContainer>

              <Checkbox checked={!!claim.givenName} />
            </AttributesRow>

            <AttributesRow>
              <AttributesLabelContainer>
                <AttributesHeader>Email</AttributesHeader>
                <AttributesValue>{profile.email}</AttributesValue>
              </AttributesLabelContainer>

              <Checkbox checked={!!claim.email} />
            </AttributesRow>

            <AttributesRow>
              <AttributesLabelContainer>
                <AttributesHeader>Phone number</AttributesHeader>
                <AttributesValue>{profile.telephone}</AttributesValue>
              </AttributesLabelContainer>

              <Checkbox checked={!!claim.telephone} />
            </AttributesRow>

            <AttributesRow>
              <AttributesLabelContainer>
                <AttributesHeader>City</AttributesHeader>
                <AttributesValue>{profile.location}</AttributesValue>
              </AttributesLabelContainer>

              <Checkbox checked={!!claim.location} />
            </AttributesRow>

            <AttributesRow>
              <AttributesImageContainer>
                <img src={profile.photo} alt="Profile" />
              </AttributesImageContainer>
              <AttributesLabelContainer>
                <AttributesHeader>Profile picture</AttributesHeader>
                <AttributesValue>cover.jpg</AttributesValue>
              </AttributesLabelContainer>

              <Checkbox checked={!!claim.photo} />
            </AttributesRow>

            <AttributesRow>
              <AttributesImageContainer>
                <img src={profile.picture} alt="Cover" />
              </AttributesImageContainer>
              <AttributesLabelContainer>
                <AttributesHeader>Cover image</AttributesHeader>
                <AttributesValue>cover.jpg</AttributesValue>
              </AttributesLabelContainer>

              <Checkbox checked={!!claim.picture} />
            </AttributesRow>
          </AttributesList>
        </AttributesContainer>

        <ButtonsDivider />

        <ButtonsContainer>
          <ButtonsHeader>Unlink persona</ButtonsHeader>

          <ButtonsText>Something about how unlinking this persona’s impact</ButtonsText>

          <Button
            buttonType="alert"
            onClick={() => {
              history.push(routes.unlinkProfile)
            }}
          >
            Unlink Persona
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
          Save Changes
        </Button>
      </ChangesContainer>
    </MobileContainer>
  )
}

export default withRouter(AppDetailsMobileView)
