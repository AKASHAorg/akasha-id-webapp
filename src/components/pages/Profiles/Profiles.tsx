import Button from '@akashaproject/design-system/dist/components/Button'
import React from 'react'

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
} from './Styled'

const Profiles: React.FC<{}> = () => {
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

          <NoProfilesContainer>
            <NoProfilesLogo />
            <NoProfilesHeader>You have no Personas</NoProfilesHeader>
            <NoProfilesSubheader>
              Here must say something relevant about AKASHA ID and how it will work
            </NoProfilesSubheader>
          </NoProfilesContainer>
        </PageContainer>
      </Column>

      <MobileBottomContainer />
    </SidebarContainer>
  )
}

export default Profiles
