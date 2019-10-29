import Icon from '@akashaproject/design-system/dist/components/Icon'
import React from 'react'

import * as routes from '../../../../../consts/routes'
import { Apps } from '../../../../../types/apps'
import {
  ProfileAppContainer,
  ProfileAppImageContainer,
  ProfileAppLabel,
  ProfileDivider,
  ProfileHeader,
  ProfileImageContainer,
  ProfileLink,
  ProfileMenuButton,
  ProfileRow,
  ProfileSubheader,
  ProfileTextContainer,
  ProfileTopContainer,
} from './Styled'

export interface ProfileProps {
  id: string
  name: string
  about: string
  picture: string
  apps: Apps
  showApps: boolean
  togglePopover: (e: Element | null) => void
}

const Profile: React.FC<ProfileProps> = ({
  id,
  name,
  about,
  picture,
  apps,
  togglePopover,
  showApps,
}) => {
  return (
    <ProfileRow>
      <ProfileLink to={routes.profileDetails.replace(routes.profileIdParam, id)}>
        <ProfileTopContainer>
          <ProfileImageContainer>
            <img src={picture} alt={name} />
          </ProfileImageContainer>

          <ProfileTextContainer>
            <ProfileHeader>{name}</ProfileHeader>
            <ProfileSubheader>{about}</ProfileSubheader>
          </ProfileTextContainer>

          <ProfileMenuButton
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              togglePopover(e.target as Element)
              e.preventDefault()
            }}
          >
            <Icon type="more" width="20px" height="20px" color="#132540" />
          </ProfileMenuButton>
        </ProfileTopContainer>

        {showApps && (
          <>
            <ProfileDivider />

            <ProfileAppLabel>Used in</ProfileAppLabel>
            <ProfileAppContainer>
              {Object.entries(apps).map(([appId, app]) => (
                <ProfileAppImageContainer key={appId}>
                  <img src={app.icon} alt={app.name} />
                </ProfileAppImageContainer>
              ))}
            </ProfileAppContainer>
          </>
        )}
      </ProfileLink>
    </ProfileRow>
  )
}

export default Profile
