import React, { useEffect } from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'

import * as routes from '../../../consts/routes'
import { App, Claim } from '../../../types/apps'
import { Persona } from '../../../types/users'
import { Column } from '../shared/Container'
import { SidebarContainer } from '../shared/SidebarContainer'
import { AppDetailsDesktopView } from './components/AppDetailsDesktopView'
import { AppDetailMobileView } from './components/AppDetailsMobileView'

export interface AppDetailsMatch {
  token: string
}

export interface AppDetailsProps extends RouteComponentProps<AppDetailsMatch> {
  app?: App
  persona?: Persona
  claim?: Claim
  redirect: boolean
  fetchPersona: (personaId: string) => void
  fetchApp: (token: string) => void
  startRemoveApp: () => void
}

const AppDetails: React.FC<AppDetailsProps> = ({
  app,
  persona,
  redirect,
  fetchPersona,
  fetchApp,
  startRemoveApp,
  match,
  history,
}) => {
  useEffect(() => {
    fetchApp(match.params.token)
  }, [fetchApp, match.params.token])

  useEffect(() => {
    if (app) {
      fetchPersona(app.persona)
    }
  }, [fetchPersona, app])

  useEffect(() => {
    if (redirect) {
      history.goBack()
      history.replace(routes.apps)
    }
  }, [redirect, history])

  return (
    <SidebarContainer>
      <Column size={6}>
        {app && (
          <>
            <AppDetailsDesktopView app={app!} startRemoveApp={startRemoveApp} />
            <AppDetailMobileView app={app!} persona={persona!} />
          </>
        )}
      </Column>
    </SidebarContainer>
  )
}

export default withRouter(AppDetails)
