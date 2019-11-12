import styled, { css } from 'styled-components'

import { screen } from '../../../styles'
import { MobilePageContainer } from '../../shared/MobilePageContainer'

const StyledMobilePageContainer = styled(MobilePageContainer)`
  ${screen.onMobile(css`
    padding-top: 76px;
  `)}
`

const QuestionsList = styled.ul`
  width: 100%;
  box-sizing: border-box;
  list-style: none;
  padding: 0;
`

export { StyledMobilePageContainer as PageContainer, QuestionsList }
