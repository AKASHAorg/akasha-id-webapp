import Button from '@akashaproject/design-system/dist/components/Button'
import React, { useEffect } from 'react'

import { Column } from '../shared/Container'
import { Sidebar } from '../shared/Sidebar'
import { SidebarContainer } from '../shared/SidebarContainer'
import { PasswordForm } from './components/PasswordForm'
import { ProfileForm } from './components/ProfileForm'

export interface ProfileProps {
  userId: string
  exportProfile: () => void
  loadProfile: () => void
}

const Profile: React.FC<ProfileProps> = ({ userId, exportProfile, loadProfile }) => {
  useEffect(() => {
    loadProfile()
  }, [loadProfile, userId])

  return (
    <SidebarContainer sidebar={<Sidebar />}>
      <Column size={12}>
        <Button onClick={exportProfile}>Export profile</Button>
        <ProfileForm />
        <PasswordForm />
      </Column>
    </SidebarContainer>
  )
}

export default Profile
