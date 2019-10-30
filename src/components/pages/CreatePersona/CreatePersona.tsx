import React, { useEffect } from 'react'
import { Redirect } from 'react-router'

import * as routes from '../../../consts/routes'
import { PersonaData } from '../../../types/users'
import { MobileTopBarWithLabelCancelButton } from '../../shared/MobileTopBarWithLabelCancelButton'
import { Column } from '../shared/Container'
import { DesktopPersonaForm } from '../shared/DesktopPersonaForm'
import { MobilePersonaForm } from '../shared/MobilePersonaForm'
import { SidebarContainer } from '../shared/SidebarContainer'

export interface CreatePersonaProps {
  redirect: boolean
  resetPersona: () => void
  onSubmit: (formData: PersonaData) => void
}

const CreatePersona: React.FC<CreatePersonaProps> = ({ redirect, resetPersona, onSubmit }) => {
  useEffect(() => {
    resetPersona()
  }, [resetPersona])

  return (
    <SidebarContainer>
      {redirect && <Redirect to={routes.personaCreated} />}

      <Column size={6}>
        <MobileTopBarWithLabelCancelButton>New Persona</MobileTopBarWithLabelCancelButton>

        <DesktopPersonaForm onSubmit={onSubmit} />
        <MobilePersonaForm edit={false} onSubmit={onSubmit} />
      </Column>
    </SidebarContainer>
  )
}

export default CreatePersona
