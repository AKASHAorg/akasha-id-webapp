import React from 'react'
import { Redirect } from 'react-router-dom'

import { appRequestLinkParam, landing, profiles, registerApp } from '../../../consts/routes'

export interface WithRedirectProps {
  signedIn: boolean
  shouldBeSignedIn: boolean
  registerAppLink?: string
  unsetRegisterAppLink: () => void
}

const WithRedirect: React.FC<React.PropsWithChildren<WithRedirectProps>> = ({
  signedIn,
  shouldBeSignedIn,
  registerAppLink,
  unsetRegisterAppLink,
  children,
}) => {
  if (signedIn && registerAppLink) {
    unsetRegisterAppLink()

    return <Redirect to={registerApp.replace(appRequestLinkParam, registerAppLink)} />
  }

  if (signedIn === shouldBeSignedIn) {
    return <>{children}</>
  }

  if (shouldBeSignedIn) {
    return <Redirect to={landing} />
  }

  return <Redirect to={profiles} />
}

export default WithRedirect
