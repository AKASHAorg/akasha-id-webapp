import React from 'react'

import { Container } from './Styled'

export interface MobileTopBarContainerProps extends React.PropsWithChildren<any> {}

const MobileTopBarContainer: React.FC<MobileTopBarContainerProps> = ({ children }) => (
  <Container>{children}</Container>
)

export default MobileTopBarContainer
