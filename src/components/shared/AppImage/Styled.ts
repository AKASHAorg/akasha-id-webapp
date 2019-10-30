import styled, { css } from 'styled-components'

import { screen } from '../../../styles'

const ImageContainer = styled.div`
  overflow: hidden;
  box-sizing: border-box;

  width: 40px;
  height: 40px;

  > img {
    width: 40px;
    height: 40px;
  }

  ${screen.onMobile(css`
    border-radius: 4px;
  `)}

  ${screen.onDesktop(css`
    border-radius: 20px;
  `)}
`

export { ImageContainer }
