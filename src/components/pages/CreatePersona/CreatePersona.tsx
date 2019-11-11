import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { RouteComponentProps, withRouter } from 'react-router'

import { translation } from '../../../consts/i18n'
import * as routes from '../../../consts/routes'
import { PersonaData } from '../../../types/users'
import { MobileTopBarWithLabelCancelButton } from '../../shared/MobileTopBarWithLabelCancelButton'
import { Column } from '../shared/Container'
import { DesktopPersonaForm } from '../shared/DesktopPersonaForm'
import { MobilePersonaForm } from '../shared/MobilePersonaForm'
import { SidebarContainer } from '../shared/SidebarContainer'

export interface CreatePersonaProps extends RouteComponentProps<any> {
  redirect: boolean
  resetPersona: () => void
  onSubmit: (formData: PersonaData) => void
}

const CreatePersona: React.FC<CreatePersonaProps> = ({
  redirect,
  resetPersona,
  onSubmit,
  history,
}) => {
  useEffect(() => {
    resetPersona()
  }, [resetPersona])

  useEffect(() => {
    if (redirect) {
      history.replace(routes.personaCreated)
    }
  }, [redirect, history])

  const { t } = useTranslation()

  return (
    <SidebarContainer>
      <Column size={6}>
        <MobileTopBarWithLabelCancelButton>
          {t(translation.mobilePageTitles.createPersona)}
        </MobileTopBarWithLabelCancelButton>

        <DesktopPersonaForm onSubmit={onSubmit} />
        <MobilePersonaForm edit={false} onSubmit={onSubmit} />
      </Column>
    </SidebarContainer>
  )
}

export default withRouter(CreatePersona)
