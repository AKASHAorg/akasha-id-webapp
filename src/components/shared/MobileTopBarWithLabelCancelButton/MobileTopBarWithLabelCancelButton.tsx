import React from 'react'
import { useTranslation } from 'react-i18next'
import { RouteComponentProps, withRouter } from 'react-router-dom'

import { translation } from '../../../consts/i18n'
import { MobileTopBarContainer } from '../MobileTopBarContainer'
import { BackButton, Label } from './Styled'

export interface MobileTitledTopContainerProps
  extends React.PropsWithChildren<RouteComponentProps<any>> {}

const MobileTopBarWithArrowCancelButton: React.FC<MobileTitledTopContainerProps> = ({
  children,
  history,
}) => {
  const { t } = useTranslation()

  return (
    <MobileTopBarContainer>
      <Label>{children}</Label>
      <BackButton onClick={history.goBack}>{t(translation.cancel)}</BackButton>
    </MobileTopBarContainer>
  )
}

export default withRouter(MobileTopBarWithArrowCancelButton)
