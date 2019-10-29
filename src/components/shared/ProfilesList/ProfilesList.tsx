import BasePopover from '@akashaproject/design-system/dist/components/Popover/BasePopover'
import '@trendmicro/react-popover/dist/react-popover.css'
import React, { useState } from 'react'

import { Apps as AppsType } from '../../../types/apps'
import { Profile as ProfileType } from '../../../types/users'
import { Popover } from './components/Popover'
import { Profile } from './components/Profile'
import { StyledProfilesList } from './Styled'

export interface ProfilesListProps {
  apps: AppsType
  profiles: ProfileType[]
  showApps: boolean
}

const ProfilesList: React.FC<ProfilesListProps> = ({ apps, profiles, showApps, ...props }) => {
  const [showPopover, setPopoverVisibility] = useState(false)
  const [popoverTarget, setPopoverTarget] = useState<Element | null>(null)
  const [popoverId, setPopoverId] = useState('')

  const togglePopover = (id: string) => (e: Element | null) => {
    if (showPopover) {
      setPopoverVisibility(false)
      setPopoverTarget(null)
    } else {
      setPopoverVisibility(true)
      setPopoverTarget(e)
      setPopoverId(id)
    }
  }

  return (
    <>
      <StyledProfilesList {...props}>
        {profiles.map(profile => (
          <Profile
            key={profile.id}
            id={profile.id}
            name={profile.profileName}
            about={profile.about}
            picture={profile.photo}
            apps={apps}
            togglePopover={togglePopover(profile.id)}
            showApps={showApps}
          />
        ))}
      </StyledProfilesList>

      <BasePopover target={popoverTarget} placement="top-left" show={showPopover}>
        <Popover id={popoverId} />
      </BasePopover>
    </>
  )
}

export default ProfilesList
