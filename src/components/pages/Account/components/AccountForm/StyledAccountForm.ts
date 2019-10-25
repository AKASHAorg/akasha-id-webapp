import styled, { css } from 'styled-components'

import { borders, fonts, screen } from '../../../../../styles'

const AccountHeader = styled.h3`
  ${screen.onlyDesktop}
  ${screen.onDesktop(css`
    line-height: 25px;
    font-size: 20px;
    margin-bottom: 40px;
  `)}

  font-family: 'HK Grotesk Medium';
  font-weight: 500;
`

const PasswordHeader = styled.h3`
  ${screen.onlyMobile}
  ${fonts.text}
  
  margin-top: 0px;
  margin-bottom: 24px;
`

const FieldContainer = styled.div`
  ${screen.onMobile(css`
    margin-bottom: 20px;
  `)}

  ${screen.onDesktop(css`
    margin-bottom: 24px;
  `)}
`

const ButtonContainer = styled.div`
  ${screen.onMobile(css`
    text-align: left;
    margin-top: 24px;
  `)}

  ${screen.onDesktop(css`
    text-align: right;
  `)}
`

const PasswordContainer = styled.div`
  ${screen.onMobile(css`
    ${borders.whiteBlock('17px', true)}

    margin-top: 32px;
  `)}
`

export { AccountHeader, PasswordHeader, FieldContainer, ButtonContainer, PasswordContainer }
