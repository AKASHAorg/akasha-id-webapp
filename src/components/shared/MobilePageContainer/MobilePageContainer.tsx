import React from 'react'

import { StyledPageContainer } from './Styled'

export interface MobilePageContainerProps extends React.PropsWithChildren<any> {}

const MobilePageContainer: React.FC<MobilePageContainerProps> = ({ children, ...props }) => (
  <StyledPageContainer {...props}>{children}</StyledPageContainer>
)

export default MobilePageContainer
