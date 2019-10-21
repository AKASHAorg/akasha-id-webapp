import Icon from '@akashaproject/design-system/dist/components/Icon'
import AkashaThemeContext from '@akashaproject/design-system/dist/providers/ThemeProvider'
import React, { useContext } from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'

import { MobileTopBarContainer } from '../MobileTopBarContainer'
import { BackButton, Label } from './Styled'

export interface MobileTitledTopContainerProps
  extends React.PropsWithChildren<RouteComponentProps<any>> {}

const MobileTopBarWithArrowCancelButton: React.FC<MobileTitledTopContainerProps> = ({
  children,
  history,
}) => {
  const theme = useContext(AkashaThemeContext)

  return (
    <MobileTopBarContainer>
      <BackButton onClick={history.goBack}>
        <Icon type="back" width="20px" height="20px" color={theme.colors.dark} />
      </BackButton>
      <Label>{children}</Label>
    </MobileTopBarContainer>
  )
}

export default withRouter(MobileTopBarWithArrowCancelButton)
