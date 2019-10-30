import React, { useEffect } from 'react'
import { Redirect, RouteComponentProps, withRouter } from 'react-router'

import * as routes from '../../../consts/routes'
import { DeletePersonaModal } from '../../modals/DeletePersonaModal'

export interface DeletePersonaMatch {
  personaid: string
}

export interface DeletePersonaProps extends RouteComponentProps<DeletePersonaMatch> {
  redirect: boolean
  loadPersona: (personaId: string) => void
  loadApps: (personaId: string) => void
}

const DeletePersona: React.FC<DeletePersonaProps> = ({
  redirect,
  loadPersona,
  loadApps,
  match,
}) => {
  useEffect(() => {
    loadPersona(match.params.personaid)
  }, [loadPersona, match.params.personaid])

  useEffect(() => {
    loadApps(match.params.personaid)
  }, [loadApps, match.params.personaid])

  return (
    <>
      {redirect && <Redirect to={routes.personas} />}

      <DeletePersonaModal />
    </>
  )
}

export default withRouter(DeletePersona)
