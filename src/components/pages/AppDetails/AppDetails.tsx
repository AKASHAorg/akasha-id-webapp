import Checkbox from '@akashaproject/design-system/dist/components/Checkbox'
import Icon from '@akashaproject/design-system/dist/components/Icon'
import AkashaThemeContext from '@akashaproject/design-system/dist/providers/ThemeProvider'
import { DocumentText } from 'grommet-icons'
import React, { useContext, useEffect } from 'react'
import { Redirect, RouteComponentProps } from 'react-router-dom'

import * as routes from '../../../consts/routes'
import { App, Claim } from '../../../types/apps'
import { Column } from '../shared/Container'
import { SidebarContainer } from '../shared/SidebarContainer'
import {
  AttributesHeader,
  AttributesList,
  AttributesRow,
  DateContainer,
  Description,
  DescriptionContainer,
  DescriptionHeader,
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
} from './StyledAppDetails'

const attributeNameMap = new Map<string, string>()
attributeNameMap.set('givenName', 'Given name')
attributeNameMap.set('photo', 'Photo')
attributeNameMap.set('picture', 'Picture')
attributeNameMap.set('about', 'About')
attributeNameMap.set('address', 'Address')
attributeNameMap.set('email', 'Email')

export interface AppDetailsMatch {
  token: string
}

export interface AppDetailsProps extends RouteComponentProps<AppDetailsMatch> {
  app?: App
  claim?: Claim
  redirect: boolean
  fetchClaim: (token: string) => void
  startRemoveApp: () => void
}

const AppDetails: React.FC<AppDetailsProps> = ({
  app,
  claim,
  redirect,
  fetchClaim,
  startRemoveApp,
  match,
}) => {
  useEffect(() => {
    fetchClaim(match.params.token)
  }, [fetchClaim, match.params.token])
  const theme = useContext(AkashaThemeContext)

  return (
    <SidebarContainer>
      {redirect && <Redirect to={routes.apps} />}

      <Column size={6}>
        {app && (
          <>
            <HeaderContainer>
              <ImageContainer>
                <img src={app.icon} alt={app.name} />
              </ImageContainer>
              <NameContainer>
                <Name>{app.name}</Name>
                <SubheaderContainer>
                  <Status>Active</Status>
                  <DateContainer>Profile requested on 20 July 2019</DateContainer>
                </SubheaderContainer>
              </NameContainer>
            </HeaderContainer>

            <DescriptionContainer>
              <Column size={4}>
                <DescriptionHeader>
                  <DocumentText color="dark-1" size="20px" />
                  <div>About</div>
                </DescriptionHeader>
                <Description>{app.description}</Description>
              </Column>

              <Column size={2}>
                <DescriptionHeader>
                  <Icon type="linkEntry" color={theme.colors.dark} width="16px" height="16px" />
                  <div>Link</div>
                </DescriptionHeader>
                <Link href={app.url}>{app.url}</Link>
              </Column>
            </DescriptionContainer>

            <Divider />

            <Column size={4}>
              <AttributesHeader>
                You are currently sharing the following profile atributes:
              </AttributesHeader>

              <AttributesList>
                {claim!.attributes.map((attribute: string) => (
                  <AttributesRow key={attribute}>
                    <Checkbox
                      checked={attribute in (claim! as any)}
                      label={attributeNameMap.get(attribute)}
                    />
                  </AttributesRow>
                ))}
              </AttributesList>
            </Column>

            <Divider />

            <RemoveContainer>
              <RemoveHeaderContainer>
                <RemoveHeader>Remove Access</RemoveHeader>
                <RemoveSubheader>
                  Once you delete your profile, there is no going back. Please be certain.
                </RemoveSubheader>
              </RemoveHeaderContainer>
              <RemoveButton buttonType="primary" onClick={startRemoveApp}>
                Remove
              </RemoveButton>
            </RemoveContainer>
          </>
        )}
      </Column>
    </SidebarContainer>
  )
}

export default AppDetails
