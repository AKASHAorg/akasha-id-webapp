import styled, { css } from 'styled-components'

import { screen } from '../../../../styles'

const StyledContainer = styled.div`
  ${screen.onMobile(css`
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
    flex-wrap: wrap;
  `)}

  ${screen.onDesktop(css`
    width: 1444px;
    margin: 0 calc(50vw - 722px);
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
  `)}
`

export default StyledContainer
