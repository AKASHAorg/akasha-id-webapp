import Button from '@akashaproject/design-system/dist/components/Button'
import Icon from '@akashaproject/design-system/dist/components/Icon'
import AkashaThemeContext from '@akashaproject/design-system/dist/providers/ThemeProvider'
import React, { useContext, useEffect } from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'

import * as routes from '../../../consts/routes'
import { Apps } from '../../../types/apps'
import { MobileBottomBar } from '../../shared/MobileBottomBar'
import { MobileTopBar } from '../../shared/MobileTopBar'
import { Column } from '../shared/Container'
import { SidebarContainer } from '../shared/SidebarContainer'
import {
  MobileProfilesHeader,
  MobileProfilesHeaderContainer,
  NoProfilesContainer,
  NoProfilesHeader,
  NoProfilesLogo,
  NoProfilesSubheader,
  PageContainer,
  ProfilesHeader,
  StyledProfilesList,
} from './Styled'

export interface ProfilesProps extends RouteComponentProps {
  apps: Apps
  name: string
  photo: string
  about: string
  loadProfile: () => void
  loadApps: () => void
}

const Profiles: React.FC<ProfilesProps> = ({
  apps,
  name,
  photo,
  about,
  loadProfile,
  loadApps,
  history,
}) => {
  const theme = useContext(AkashaThemeContext)
  const profiles = [`${name}1`, `${name}2`, `${name}3`]

  useEffect(() => {
    loadProfile()
    loadApps()
  }, [loadProfile, loadApps])

  // const profiles: string[] = []

  return (
    <SidebarContainer>
      <MobileTopBar />

      <Column size={6}>
        <PageContainer>
          <ProfilesHeader>My Profiles' List</ProfilesHeader>

          <MobileProfilesHeaderContainer>
            <MobileProfilesHeader>My Personas</MobileProfilesHeader>
            <Button
              buttonType="primary"
              small={true}
              onClick={() => history.push(routes.createProfile)}
            >
              <Icon type="plus" color={theme.colors.white} width="13px" height="13px" />
              New Persona
            </Button>
          </MobileProfilesHeaderContainer>

          {profiles.length === 0 && (
            <NoProfilesContainer>
              <NoProfilesLogo />
              <NoProfilesHeader>You have no Personas</NoProfilesHeader>
              <NoProfilesSubheader>
                Here must say something relevant about AKASHA ID and how it will work
              </NoProfilesSubheader>
            </NoProfilesContainer>
          )}

          {profiles.length > 0 && (
            <StyledProfilesList
              apps={apps}
              about={about}
              photo={photo}
              profiles={profiles}
              showApps={true}
            />
          )}
        </PageContainer>
      </Column>

      <MobileBottomBar />
    </SidebarContainer>
  )
}

export default withRouter(Profiles)
