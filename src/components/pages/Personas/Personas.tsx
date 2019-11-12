import Button from '@akashaproject/design-system/dist/components/Button'
import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { RouteComponentProps, withRouter } from 'react-router-dom'

import { translation } from '../../../consts/i18n'
import * as routes from '../../../consts/routes'
import { Apps } from '../../../types/apps'
import { Persona } from '../../../types/users'
import { MobileBottomBar } from '../../shared/MobileBottomBar'
import { MobileTopBar } from '../../shared/MobileTopBar'
import { Column } from '../shared/Container'
import { SidebarContainer } from '../shared/SidebarContainer'
import {
  MobilePersonasHeader,
  MobilePersonasHeaderContainer,
  NoPersonasContainer,
  NoPersonasHeader,
  NoPersonasLogo,
  NoPersonasSubheader,
  PageContainer,
  PersonasHeader,
  StyledPersonasList,
} from './Styled'

import newPersonIcon from './add.svg'
import noPersonasLogo from './no-personas.png'

export interface PersonasProps extends RouteComponentProps {
  apps: { [personaId: string]: Apps }
  personas: Persona[]
  loadPersonas: () => void
  loadApps: () => void
  unsetRedirect: () => void
}

const Personas: React.FC<PersonasProps> = ({
  apps,
  personas,
  loadPersonas,
  loadApps,
  unsetRedirect,
  history,
}) => {
  useEffect(() => {
    loadPersonas()
  }, [loadPersonas])

  useEffect(() => {
    loadApps()
  }, [loadApps])

  useEffect(() => {
    unsetRedirect()
  }, [unsetRedirect])

  const { t } = useTranslation()

  return (
    <SidebarContainer>
      <MobileTopBar />

      <Column size={6}>
        <PageContainer>
          <PersonasHeader>{t(translation.desktopPageTitles.personas)}</PersonasHeader>

          <MobilePersonasHeaderContainer>
            <MobilePersonasHeader>{t(translation.mobilePageTitles.personas)}</MobilePersonasHeader>
            <Button
              buttonType="primary"
              small={true}
              onClick={() => history.push(routes.createPersona)}
            >
              <img src={newPersonIcon} alt="New person" />
              {t(translation.newPersona)}
            </Button>
          </MobilePersonasHeaderContainer>

          {personas.length === 0 && (
            <NoPersonasContainer>
              <NoPersonasLogo>
                <img src={noPersonasLogo} alt="No personas" />
              </NoPersonasLogo>
              <NoPersonasHeader>{t(translation.noPersonas.header)}</NoPersonasHeader>
              <NoPersonasSubheader>{t(translation.noPersonas.subheader)}</NoPersonasSubheader>
            </NoPersonasContainer>
          )}

          {personas.length > 0 && (
            <StyledPersonasList apps={apps} personas={personas} showApps={true} />
          )}
        </PageContainer>
      </Column>

      <MobileBottomBar />
    </SidebarContainer>
  )
}

export default withRouter(Personas)
