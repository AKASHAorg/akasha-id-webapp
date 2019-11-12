import React from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'

import { MobileTopBarContainer } from '../MobileTopBarContainer'
import { BackButton, Label } from './Styled'

import arrowIcon from './arrow.svg'

export interface MobileTitledTopContainerProps
  extends React.PropsWithChildren<RouteComponentProps<any>> {}

const MobileTopBarWithArrowCancelButton: React.FC<MobileTitledTopContainerProps> = ({
  children,
  history,
}) => {
  return (
    <MobileTopBarContainer>
      <BackButton onClick={history.goBack}>
        <img src={arrowIcon} alt="Back" />
      </BackButton>
      <Label>{children}</Label>
    </MobileTopBarContainer>
  )
}

export default withRouter(MobileTopBarWithArrowCancelButton)
