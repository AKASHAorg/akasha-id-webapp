import React, { useEffect } from 'react'

import { WithRedirect } from '../../shared/WithRedirect'
import RegisterApp, { RegisterAppProps } from './RegisterApp'

export interface RegisterAppWrapperProps extends RegisterAppProps {
  signedIn: boolean
  handleSetRegisterAppLink: (link: string) => void
}

const RegisterAppWrapper: React.FC<RegisterAppWrapperProps> = ({
  signedIn,
  handleSetRegisterAppLink,
  ...props
}) => {
  useEffect(() => {
    if (!signedIn) {
      handleSetRegisterAppLink(props.match.params.apprequestlink)
    }
  }, [signedIn, handleSetRegisterAppLink, props.match.params.apprequestlink])

  return (
    <WithRedirect shouldBeSignedIn={true}>
      <RegisterApp {...props} />
    </WithRedirect>
  )
}

export default RegisterAppWrapper
