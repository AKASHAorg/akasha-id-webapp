import React, { useEffect } from 'react'
import { Redirect, RouteComponentProps, withRouter } from 'react-router'

import * as routes from '../../../consts/routes'
import { DeleteProfileModal } from '../../modals/DeleteProfileModal'

export interface DeleteProfileMatch {
  profileid: string
}

export interface DeleteProfileProps extends RouteComponentProps<DeleteProfileMatch> {
  redirect: boolean
  loadProfile: (profileId: string) => void
}

const DeleteProfile: React.FC<DeleteProfileProps> = ({ redirect, loadProfile, match }) => {
  useEffect(() => {
    loadProfile(match.params.profileid)
  }, [loadProfile, match.params.profileid])

  return (
    <>
      {redirect && <Redirect to={routes.profiles} />}

      <DeleteProfileModal />
    </>
  )
}

export default withRouter(DeleteProfile)
