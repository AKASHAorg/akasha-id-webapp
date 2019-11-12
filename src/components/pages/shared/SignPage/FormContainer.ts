import styled, { css } from 'styled-components'

import { screen } from '../../../../styles'

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;

  ${screen.onMobile(css`
    min-height: calc(100vh - 48px);
  `)}
`

export default FormContainer
