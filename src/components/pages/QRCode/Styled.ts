import styled, { css } from 'styled-components'

import { screen } from '../../../styles'
import { MobilePageContainer } from '../../shared/MobilePageContainer'

const StyledMobilePageContainer = styled(MobilePageContainer)`
  ${screen.onMobile(css`
    padding-top: 0;
    padding-left: 0;
    padding-right: 0;
    padding-bottom: 0;
  `)}
`

const StyledVideo = styled.video`
  width: 100%;
  overflow: hidden;
`

export { StyledMobilePageContainer, StyledVideo }
