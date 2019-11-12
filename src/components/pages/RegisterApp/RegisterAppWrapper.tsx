import React, { useEffect } from 'react'

import { WithRedirect } from '../../shared/WithRedirect'
import RegisterApp, { RegisterAppProps } from './RegisterApp'

export interface RegisterAppWrapperProps extends RegisterAppProps {
  signedIn: boolean
  setRegisterAppLink: (link: string) => void
}

const RegisterAppWrapper: React.FC<RegisterAppWrapperProps> = ({
  signedIn,
  setRegisterAppLink,
  ...props
}) => {
  useEffect(() => {
    if (!signedIn) {
      setRegisterAppLink(props.match.params.apprequestlink)
    }
  }, [signedIn, setRegisterAppLink, props.match.params.apprequestlink])

  return (
    <WithRedirect shouldBeSignedIn={true}>
      <RegisterApp {...props} />
    </WithRedirect>
  )
}

export default RegisterAppWrapper
