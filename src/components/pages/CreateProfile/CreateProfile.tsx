import React, { useEffect } from 'react'
import { Redirect } from 'react-router'

import * as routes from '../../../consts/routes'
import { ProfileData } from '../../../types/users'
import { MobileTopBarWithLabelCancelButton } from '../../shared/MobileTopBarWithLabelCancelButton'
import { Column } from '../shared/Container'
import { DesktopProfileForm } from '../shared/DesktopProfileForm'
import { MobileProfileForm } from '../shared/MobileProfileForm'
import { SidebarContainer } from '../shared/SidebarContainer'

export interface CreateProfileProps {
  redirect: boolean
  resetProfile: () => void
  onSubmit: (formData: ProfileData) => void
}

const CreateProfile: React.FC<CreateProfileProps> = ({ redirect, resetProfile, onSubmit }) => {
  useEffect(() => {
    resetProfile()
  }, [resetProfile])

  return (
    <SidebarContainer>
      {redirect && <Redirect to={routes.profileCreated} />}

      <Column size={6}>
        <MobileTopBarWithLabelCancelButton>New Persona</MobileTopBarWithLabelCancelButton>

        <DesktopProfileForm onSubmit={onSubmit} />
        <MobileProfileForm edit={false} onSubmit={onSubmit} />
      </Column>
    </SidebarContainer>
  )
}

export default CreateProfile
