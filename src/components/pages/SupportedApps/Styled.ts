import styled, { css } from 'styled-components'

import { screen } from '../../../styles'
import { MobilePageContainer } from '../../shared/MobilePageContainer'

const StyledMobilePageContainer = styled(MobilePageContainer)`
  ${screen.onMobile(css`
    padding-top: 76px;
  `)}
`

export { StyledMobilePageContainer as PageContainer }
