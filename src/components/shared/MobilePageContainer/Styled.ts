import styled, { css } from 'styled-components'

import { screen } from '../../../styles'

const StyledPageContainer = styled.div`
  ${screen.onMobile(css`
    width: 100%;
    padding: 72px 16px 16px 16px;
    box-sizing: border-box;
  `)}
`

export { StyledPageContainer }
