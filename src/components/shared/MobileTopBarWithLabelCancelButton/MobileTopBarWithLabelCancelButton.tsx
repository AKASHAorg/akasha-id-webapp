import React from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'

import { MobileTopBarContainer } from '../MobileTopBarContainer'
import { BackButton, Label } from './Styled'

export interface MobileTitledTopContainerProps
  extends React.PropsWithChildren<RouteComponentProps<any>> {}

const MobileTopBarWithArrowCancelButton: React.FC<MobileTitledTopContainerProps> = ({
  children,
  history,
}) => {
  return (
    <MobileTopBarContainer>
      <Label>{children}</Label>
      <BackButton onClick={history.goBack}>Cancel</BackButton>
    </MobileTopBarContainer>
  )
}

export default withRouter(MobileTopBarWithArrowCancelButton)
