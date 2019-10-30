import styled, { css } from 'styled-components'

import { screen } from '../../../../styles'

const LeftPart = styled.div`
  background: ${props => props.theme.colors.white};
  display: flex;
  box-sizing: border-box;
  min-height: 100vh;

  ${screen.onMobile(css`
    width: 100%;
    padding: 32px 24px 24px 24px;
  `)}

  ${screen.onDesktop(css`
    padding-top: 157px;
    width: calc(6 * 91px + 5 * 32px + 16px);
    margin-right: 16px;
  `)}
`

export default LeftPart
