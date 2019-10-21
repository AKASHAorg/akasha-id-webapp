import React from 'react'

import { MobileTopBarWithArrowCancelButton } from '../../shared/MobileTopBarWithArrowCancelButton'
import { Column } from '../shared/Container'
import { DesktopProfileForm } from '../shared/DesktopProfileForm'
import { MobileProfileForm } from '../shared/MobileProfileForm'
import { SidebarContainer } from '../shared/SidebarContainer'

const AddProfile: React.FC<{}> = () => {
  return (
    <SidebarContainer>
      <Column size={6}>
        <MobileTopBarWithArrowCancelButton>New Persona</MobileTopBarWithArrowCancelButton>

        <DesktopProfileForm />
        <MobileProfileForm edit={false} />
      </Column>
    </SidebarContainer>
  )
}

export default AddProfile
