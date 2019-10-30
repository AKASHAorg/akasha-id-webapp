import Button from '@akashaproject/design-system/dist/components/Button'
import Icon from '@akashaproject/design-system/dist/components/Icon'
import AkashaThemeContext from '@akashaproject/design-system/dist/providers/ThemeProvider'
import React, { useContext, useEffect } from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'

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
  const theme = useContext(AkashaThemeContext)

  useEffect(() => {
    loadPersonas()
  }, [loadPersonas])

  useEffect(() => {
    loadApps()
  }, [loadApps])

  useEffect(() => {
    unsetRedirect()
  }, [unsetRedirect])

  return (
    <SidebarContainer>
      <MobileTopBar />

      <Column size={6}>
        <PageContainer>
          <PersonasHeader>My Personas' List</PersonasHeader>

          <MobilePersonasHeaderContainer>
            <MobilePersonasHeader>My Personas</MobilePersonasHeader>
            <Button
              buttonType="primary"
              small={true}
              onClick={() => history.push(routes.createPersona)}
            >
              <Icon type="plus" color={theme.colors.white} width="13px" height="13px" />
              New Persona
            </Button>
          </MobilePersonasHeaderContainer>

          {personas.length === 0 && (
            <NoPersonasContainer>
              <NoPersonasLogo />
              <NoPersonasHeader>You have no personas</NoPersonasHeader>
              <NoPersonasSubheader>
                Here must say something relevant about AKASHA ID and how it will work
              </NoPersonasSubheader>
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
