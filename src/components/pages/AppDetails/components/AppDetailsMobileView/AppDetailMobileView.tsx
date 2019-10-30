import Checkbox from '@akashaproject/design-system/dist/components/Checkbox'
import React from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'

import Button from '@akashaproject/design-system/dist/components/Button'
import * as routes from '../../../../../consts/routes'
import { App } from '../../../../../types/apps'
import { PersonaData } from '../../../../../types/users'
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

export interface AppDetailsMobileViewProps extends RouteComponentProps<any> {
  app: App
  persona: PersonaData
}

const AppDetailsMobileView: React.FC<AppDetailsMobileViewProps> = ({ app, persona, history }) => {
  return (
    <MobileContainer>
      <MobileTopBarWithArrowCancelButton>{app.appInfo.name}</MobileTopBarWithArrowCancelButton>

      <ImagesContainer>
        <PictureContainer>
          <img src={app.appInfo.icon} alt={app.appInfo.icon} />
        </PictureContainer>

        <PhotoContainer>
          <img src={app.appInfo.icon} alt={app.appInfo.icon} />
        </PhotoContainer>
      </ImagesContainer>

      <FormContainer>
        <NameHeader>{app.appInfo.name}</NameHeader>
        <About>{app.appInfo.description}</About>

        <SiteContainer>
          <SiteTitleContainer>
            <SiteLabel>Website</SiteLabel>
            <SiteText>{app.appInfo.url}</SiteText>
          </SiteTitleContainer>
          <SiteButton href={app.appInfo.url}>Visit Website</SiteButton>
        </SiteContainer>

        <AttributesContainer>
          <PersonaContainer>
            <PersonaName>{persona.personaName}</PersonaName>
            <PersonaLink to={routes.personaDetails}>View Persona</PersonaLink>
          </PersonaContainer>

          <AttributesDivider />

          <AttributesText>
            {app.appInfo.name} has access to the following attributes:
          </AttributesText>

          <AttributesList>
            <AttributesRow>
              <AttributesLabelContainer>
                <AttributesHeader>Name</AttributesHeader>
                <AttributesValue>{persona.givenName}</AttributesValue>
              </AttributesLabelContainer>

              <Checkbox checked={!!app.attributes.givenName} />
            </AttributesRow>

            <AttributesRow>
              <AttributesLabelContainer>
                <AttributesHeader>Email</AttributesHeader>
                <AttributesValue>{persona.email}</AttributesValue>
              </AttributesLabelContainer>

              <Checkbox checked={!!app.attributes.email} />
            </AttributesRow>

            <AttributesRow>
              <AttributesLabelContainer>
                <AttributesHeader>Phone number</AttributesHeader>
                <AttributesValue>{persona.telephone}</AttributesValue>
              </AttributesLabelContainer>

              <Checkbox checked={!!app.attributes.telephone} />
            </AttributesRow>

            <AttributesRow>
              <AttributesLabelContainer>
                <AttributesHeader>City</AttributesHeader>
                <AttributesValue>{persona.location}</AttributesValue>
              </AttributesLabelContainer>

              <Checkbox checked={!!app.attributes.location} />
            </AttributesRow>

            <AttributesRow>
              <AttributesImageContainer>
                <img src={persona.photo} alt="Persona" />
              </AttributesImageContainer>
              <AttributesLabelContainer>
                <AttributesHeader>Persona picture</AttributesHeader>
                <AttributesValue>cover.jpg</AttributesValue>
              </AttributesLabelContainer>

              <Checkbox checked={!!app.attributes.photo} />
            </AttributesRow>

            <AttributesRow>
              <AttributesImageContainer>
                <img src={persona.picture} alt="Cover" />
              </AttributesImageContainer>
              <AttributesLabelContainer>
                <AttributesHeader>Cover image</AttributesHeader>
                <AttributesValue>cover.jpg</AttributesValue>
              </AttributesLabelContainer>

              <Checkbox checked={!!app.attributes.picture} />
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
              history.push(routes.unlinkPersona.replace(routes.tokenParam, app.id))
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
