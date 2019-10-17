import BasePopover from '@akashaproject/design-system/dist/components/Popover/BasePopover'
import '@trendmicro/react-popover/dist/react-popover.css'
import React, { useState } from 'react'

import { Apps as AppsType } from '../../../types/apps'
import { Popover } from './components/Popover'
import { Profile } from './components/Profile'
import { StyledProfilesList } from './Styled'

export interface ProfilesListProps {
  apps: AppsType
  profiles: string[]
  photo: string
  about: string
  showApps: boolean
}

const ProfilesList: React.FC<ProfilesListProps> = ({
  apps,
  profiles,
  photo,
  about,
  showApps,
  ...props
}) => {
  const [showPopover, setPopoverVisibility] = useState(false)
  const [popoverTarget, setPopoverTarget] = useState<Element | null>(null)

  const togglePopover = (e: Element | null) => {
    if (showPopover) {
      setPopoverVisibility(false)
      setPopoverTarget(null)
    } else {
      setPopoverVisibility(true)
      setPopoverTarget(e)
    }
  }

  return (
    <>
      <StyledProfilesList {...props}>
        {profiles.map(profile => (
          <Profile
            key={profile}
            id={profile}
            name={profile}
            about={about}
            picture={photo}
            apps={apps}
            togglePopover={togglePopover}
            showApps={showApps}
          />
        ))}
      </StyledProfilesList>

      <BasePopover target={popoverTarget} placement="top-left" show={showPopover}>
        <Popover />
      </BasePopover>
    </>
  )
}

export default ProfilesList
