import React, { useEffect } from 'react'

import { ProfileCreatedModal } from '../../modals/ProfileCreatedModal'

export interface ProfileCreatedProps {
  unsetRedirect: () => void
}

const ProfileCreated: React.FC<ProfileCreatedProps> = ({ unsetRedirect }) => {
  useEffect(() => {
    unsetRedirect()
  }, [unsetRedirect])

  return <ProfileCreatedModal />
}

export default ProfileCreated
