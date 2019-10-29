import React, { useEffect } from 'react'
import { Redirect, RouteComponentProps, withRouter } from 'react-router'

import * as routes from '../../../consts/routes'
import { ProfileData } from '../../../types/users'
import { MobileTopBarWithArrowCancelButton } from '../../shared/MobileTopBarWithArrowCancelButton'
import { Column } from '../shared/Container'
import { DesktopProfileForm } from '../shared/DesktopProfileForm'
import { MobileProfileForm } from '../shared/MobileProfileForm'
import { SidebarContainer } from '../shared/SidebarContainer'

export interface EditProfileMatch {
  profileid: string
}

export interface EditProfileProps extends RouteComponentProps<EditProfileMatch> {
  redirect: boolean
  loadProfile: (profileId: string) => void
  onSubmit: (formData: ProfileData) => void
}

const EditProfile: React.FC<EditProfileProps> = ({ redirect, loadProfile, onSubmit, match }) => {
  useEffect(() => {
    loadProfile(match.params.profileid)
  }, [loadProfile, match.params.profileid])

  return (
    <SidebarContainer>
      {redirect && (
        <Redirect
          to={routes.profileDetails.replace(routes.profileIdParam, match.params.profileid)}
        />
      )}

      <Column size={6}>
        <MobileTopBarWithArrowCancelButton>Edit Persona</MobileTopBarWithArrowCancelButton>

        <DesktopProfileForm onSubmit={onSubmit} />
        <MobileProfileForm edit={true} onSubmit={onSubmit} />
      </Column>
    </SidebarContainer>
  )
}

export default withRouter(EditProfile)
