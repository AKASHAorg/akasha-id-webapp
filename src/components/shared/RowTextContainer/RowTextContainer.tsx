import React from 'react'

import { Header, Subheader, TextContainer } from './styled'

export interface RowTextContainerProps {
  header: string | React.ReactNode
  subheader: string | React.ReactNode
}

const RowTextContainer: React.FC<RowTextContainerProps> = ({ header, subheader, ...props }) => (
  <TextContainer {...props}>
    <Header>{header}</Header>
    <Subheader>{subheader}</Subheader>
  </TextContainer>
)

export default RowTextContainer
