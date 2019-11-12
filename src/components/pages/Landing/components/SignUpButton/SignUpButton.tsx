import Button, { ButtonProps } from '@akashaproject/design-system/dist/components/Button'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { RouteComponentProps, withRouter } from 'react-router-dom'

import { landing } from '../../../../../consts/i18n'
import { LANDING } from '../../../../../consts/i18n-ns'
import { signUp } from '../../../../../consts/routes'

interface SignUpButtonProps extends RouteComponentProps<any>, Omit<ButtonProps, 'onClick'> {}

const SignUpButton: React.FC<SignUpButtonProps> = ({ history, ...props }) => {
  const { t } = useTranslation(LANDING)

  return (
    <Button {...props} buttonType="primary" onClick={() => history.push(signUp)}>
      {t(landing.createAccount)}
    </Button>
  )
}

export default withRouter(SignUpButton)
