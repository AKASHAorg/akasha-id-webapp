import styled, { css } from 'styled-components'

import { screen } from '../../../../styles'

const FieldContainer = styled.div`
  margin-bottom: 28px;

  > *:not(:last-child) {
    margin-bottom: 24px;
  }

  ${screen.onMobile(css`
    margin-top: 28px;
    width: 100%;
  `)}

  ${screen.onDesktop(css`
    margin-top: 65px;
    width: calc(3 * 91px + 2 * 32px);
  `)}
`

export default FieldContainer
