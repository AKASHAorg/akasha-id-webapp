import React, { useEffect } from 'react'

import { Column } from '../shared/Container'
import { SidebarContainer } from '../shared/SidebarContainer'
import { ProfileForm } from './components/ProfileForm'

export interface EditProfileProps {
  userId: string
  loadProfile: () => void
}

const Profile: React.FC<EditProfileProps> = ({ userId, loadProfile }) => {
  useEffect(() => {
    loadProfile()
  }, [loadProfile, userId])

  return (
    <SidebarContainer>
      <Column size={6}>
        <ProfileForm />
      </Column>
    </SidebarContainer>
  )
}

export default Profile
