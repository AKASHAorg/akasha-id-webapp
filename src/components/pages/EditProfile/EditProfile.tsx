import React, { useEffect } from 'react'

import { MobileTopBarWithArrowCancelButton } from '../../shared/MobileTopBarWithArrowCancelButton'
import { Column } from '../shared/Container'
import { DesktopProfileForm } from '../shared/DesktopProfileForm'
import { MobileProfileForm } from '../shared/MobileProfileForm'
import { SidebarContainer } from '../shared/SidebarContainer'

export interface EditProfileProps {
  userId: string
  loadProfile: () => void
}

const EditProfile: React.FC<EditProfileProps> = ({ userId, loadProfile }) => {
  useEffect(() => {
    loadProfile()
  }, [loadProfile, userId])

  return (
    <SidebarContainer>
      <Column size={6}>
        <MobileTopBarWithArrowCancelButton>Edit Persona</MobileTopBarWithArrowCancelButton>

        <DesktopProfileForm />
        <MobileProfileForm edit={true} />
      </Column>
    </SidebarContainer>
  )
}

export default EditProfile
