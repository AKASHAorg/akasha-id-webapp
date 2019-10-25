import React from 'react'

import { MobileTopBarWithLabelCancelButton } from '../../shared/MobileTopBarWithLabelCancelButton'
import { Column } from '../shared/Container'
import { DesktopProfileForm } from '../shared/DesktopProfileForm'
import { MobileProfileForm } from '../shared/MobileProfileForm'
import { SidebarContainer } from '../shared/SidebarContainer'

const CreateProfile: React.FC<{}> = () => {
  return (
    <SidebarContainer>
      <Column size={6}>
        <MobileTopBarWithLabelCancelButton>New Persona</MobileTopBarWithLabelCancelButton>

        <DesktopProfileForm />
        <MobileProfileForm edit={false} />
      </Column>
    </SidebarContainer>
  )
}

export default CreateProfile
