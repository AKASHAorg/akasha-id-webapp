import React, { useEffect } from 'react'
import { Redirect, RouteComponentProps, withRouter } from 'react-router'

import * as routes from '../../../consts/routes'
import { PersonaData } from '../../../types/users'
import { MobileTopBarWithArrowCancelButton } from '../../shared/MobileTopBarWithArrowCancelButton'
import { Column } from '../shared/Container'
import { DesktopPersonaForm } from '../shared/DesktopPersonaForm'
import { MobilePersonaForm } from '../shared/MobilePersonaForm'
import { SidebarContainer } from '../shared/SidebarContainer'

export interface EditPersonaMatch {
  personaid: string
}

export interface EditPersonaProps extends RouteComponentProps<EditPersonaMatch> {
  redirect: boolean
  loadPersona: (personaId: string) => void
  onSubmit: (formData: PersonaData) => void
}

const EditPersona: React.FC<EditPersonaProps> = ({ redirect, loadPersona, onSubmit, match }) => {
  useEffect(() => {
    loadPersona(match.params.personaid)
  }, [loadPersona, match.params.personaid])

  return (
    <SidebarContainer>
      {redirect && (
        <Redirect
          to={routes.personaDetails.replace(routes.personaIdParam, match.params.personaid)}
        />
      )}

      <Column size={6}>
        <MobileTopBarWithArrowCancelButton>Edit Persona</MobileTopBarWithArrowCancelButton>

        <DesktopPersonaForm onSubmit={onSubmit} />
        <MobilePersonaForm edit={true} onSubmit={onSubmit} />
      </Column>
    </SidebarContainer>
  )
}

export default withRouter(EditPersona)
