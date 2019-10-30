import React, { useEffect } from 'react'
import { Redirect, RouteComponentProps, withRouter } from 'react-router-dom'

import * as routes from '../../../consts/routes'
import { App } from '../../../types/apps'
import { Persona } from '../../../types/users'
import { UnlinkPersonaModal } from '../../modals/UnlinkPersonaModal'

export interface UnlinkPersonaMatch {
  token: string
}

export interface UnlinkPersonaProps extends RouteComponentProps<UnlinkPersonaMatch> {
  app?: App
  persona?: Persona
  redirect: boolean
  loadApp: (token: string) => void
  loadPersona: (personaId: string) => void
}

const UnlinkPersona: React.FC<UnlinkPersonaProps> = ({
  app,
  persona,
  redirect,
  loadApp,
  loadPersona,
  match,
}) => {
  useEffect(() => {
    loadApp(match.params.token)
  }, [loadApp, match.params.token])

  useEffect(() => {
    if (app) {
      loadPersona(app.persona)
    }
  }, [loadPersona, app])

  return (
    <>
      {redirect && <Redirect to={routes.apps} />}

      {app && persona && <UnlinkPersonaModal app={app} persona={persona} />}
    </>
  )
}

export default withRouter(UnlinkPersona)
