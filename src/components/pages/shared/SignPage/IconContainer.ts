import styled from 'styled-components'

import { screen } from '../../../../styles'

const IconContainer = styled.div`
  ${screen.onlyMobile}

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 40px;
`

export default IconContainer
