import styled, { css } from 'styled-components'

import { fonts, screen } from '../../../../styles'

const Header = styled.h1`
  ${fonts.textHeader}

  ${screen.onMobile(css`
    margin: 0;
  `)}

  ${screen.onDesktop(css`
    margin: 0 0 8px 0;
  `)}
`

export default Header
