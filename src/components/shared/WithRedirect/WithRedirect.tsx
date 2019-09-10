import React from 'react'
import { Redirect } from 'react-router-dom'

import { landing, profile } from '../../../consts/routes'

export interface WithRedirectProps {
  signedIn: boolean
  shouldBeSignedIn: boolean
}

const WithRedirect: React.FC<React.PropsWithChildren<WithRedirectProps>> = ({
  signedIn,
  shouldBeSignedIn,
  children,
}) => {
  if (signedIn === shouldBeSignedIn) {
    return <>{children}</>
  }

  if (shouldBeSignedIn) {
    return <Redirect to={landing} />
  }

  return <Redirect to={profile} />
}

export default WithRedirect
