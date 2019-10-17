import Button from '@akashaproject/design-system/dist/components/Button'
import React, { useEffect } from 'react'

import { Apps } from '../../../types/apps'
import { MobileBottomContainer } from '../../shared/MobileBottomContainer'
import { MobileTopContainer } from '../../shared/MobileTopContainer'
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

export interface ProfilesProps {
  apps: Apps
  name: string
  photo: string
  about: string
  loadProfile: () => void
  loadApps: () => void
}

const Profiles: React.FC<ProfilesProps> = ({ apps, name, photo, about, loadProfile, loadApps }) => {
  const profiles = [`${name}1`, `${name}2`, `${name}3`]

  useEffect(() => {
    loadProfile()
    loadApps()
  }, [loadProfile, loadApps])

  // const profiles: string[] = []

  return (
    <SidebarContainer>
      <MobileTopContainer />

      <Column size={6}>
        <PageContainer>
          <ProfilesHeader>My Profiles' List</ProfilesHeader>

          <MobileProfilesHeaderContainer>
            <MobileProfilesHeader>My Personas</MobileProfilesHeader>
            <Button buttonType="primary" small={true} onClick={() => {}}>
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

      <MobileBottomContainer />
    </SidebarContainer>
  )
}

export default Profiles
