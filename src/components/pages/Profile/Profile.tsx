import React, { useEffect } from 'react'

import { WithRedirect } from '../../shared/WithRedirect'
import { Column } from '../shared/Container'
import { Sidebar } from '../shared/Sidebar'
import { SidebarContainer } from '../shared/SidebarContainer'
import { PasswordForm } from './components/PasswordForm'
import { ProfileForm } from './components/ProfileForm'

export interface ProfileProps {
  userId: string
  signedIn: boolean
  loadProfile: () => void
}

const Profile: React.FC<ProfileProps> = ({ userId, signedIn, loadProfile }) => {
  useEffect(() => {
    if (signedIn) {
      loadProfile()
    }
  }, [signedIn, loadProfile, userId])

  return (
    <WithRedirect shouldBeSignedIn={true}>
      <SidebarContainer sidebar={<Sidebar />}>
        <Column size={12}>
          <ProfileForm />
          <PasswordForm />
        </Column>
      </SidebarContainer>
    </WithRedirect>
  )
}

export default Profile
