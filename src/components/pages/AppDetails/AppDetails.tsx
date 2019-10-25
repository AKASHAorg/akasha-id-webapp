import React, { useEffect } from 'react'
import { Redirect, RouteComponentProps } from 'react-router-dom'

import * as routes from '../../../consts/routes'
import { App, Claim } from '../../../types/apps'
import { ProfileData } from '../../../types/users'
import { Column } from '../shared/Container'
import { SidebarContainer } from '../shared/SidebarContainer'
import { AppDetailsDesktopView } from './components/AppDetailsDesktopView'
import { AppDetailMobileView } from './components/AppDetailsMobileView'

export interface AppDetailsMatch {
  token: string
}

export interface AppDetailsProps extends RouteComponentProps<AppDetailsMatch> {
  app?: App
  userName: string
  profile?: ProfileData
  claim?: Claim
  redirect: boolean
  fetchClaim: (token: string) => void
  fetchProfile: () => void
  startRemoveApp: () => void
}

const AppDetails: React.FC<AppDetailsProps> = ({
  app,
  userName,
  profile,
  claim,
  redirect,
  fetchProfile,
  fetchClaim,
  startRemoveApp,
  match,
}) => {
  useEffect(() => {
    fetchProfile()
  }, [fetchProfile])

  useEffect(() => {
    fetchClaim(match.params.token)
  }, [fetchClaim, match.params.token])

  return (
    <SidebarContainer>
      {redirect && <Redirect to={routes.apps} />}

      <Column size={6}>
        {app && (
          <>
            <AppDetailsDesktopView app={app!} claim={claim!} startRemoveApp={startRemoveApp} />
            <AppDetailMobileView app={app!} userName={userName} profile={profile!} claim={claim!} />
          </>
        )}
      </Column>
    </SidebarContainer>
  )
}

export default AppDetails
