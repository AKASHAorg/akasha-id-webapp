import React from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'

import Button from '@akashaproject/design-system/dist/components/Button'
import attributeNamesMap from '../../../../../consts/attribute-names-map'
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

export interface AppDetailsMobileViewProps extends RouteComponentProps<any> {
  app: App
  persona: PersonaData
}

const AppDetailsMobileView: React.FC<AppDetailsMobileViewProps> = ({ app, persona, history }) => {
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
            {Object.entries(app.attributes).map(([attribute, checked]) => (
              <AttributesRow key={attribute}>
                {(attribute === 'photo ' || attribute === 'picture') && (
                  <>
                    <AttributesImageContainer
                      src={(persona as any)[attribute]}
                      alt={attributeNamesMap.get(attribute)}
                    />
                    <AttributesLabelContainer>
                      <AttributesHeader>{attributeNamesMap.get(attribute)}</AttributesHeader>
                      <AttributesValue>cover.jpg</AttributesValue>
                    </AttributesLabelContainer>
                  </>
                )}
                {attribute !== 'photo ' && attribute !== 'picture' && (
                  <AttributesLabelContainer>
                    <AttributesHeader>{attributeNamesMap.get(attribute)}</AttributesHeader>
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
