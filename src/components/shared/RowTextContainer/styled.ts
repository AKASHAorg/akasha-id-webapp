import styled, { css } from 'styled-components'

import { fonts, screen } from '../../../styles'

const TextContainer = styled.div`
  margin-left: 12px;
  flex-grow: 1;
`

const Header = styled.h4`
  color: #132540;

  ${screen.onMobile(css`
    ${fonts.textBold}

    margin: 0;
  `)}

  ${screen.onDesktop(css`
    font-size: 13px;
    line-height: 20px;
    font-weight: 600;
    letter-spacing: -0.08px;
    margin: 0 0 2px 0;
    font-family: 'SF UI Text Semibold';
  `)}
`

const Subheader = styled.div`
  ${fonts.greyText}

  display: flex;
`

export { TextContainer, Header, Subheader }
