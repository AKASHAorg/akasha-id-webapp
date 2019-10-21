import styled, { css } from 'styled-components'

import { screen } from '../../../../../styles'

const AccountHeader = styled.h3`
  font-family: 'HK Grotesk Medium';
  font-weight: 500;

  ${screen.onMobile(css`
    letter-spacing: -0.25px;
    line-height: 22px;
    font-size: 16px;
    margin-bottom: 20px;
  `)}

  ${screen.onDesktop(css`
    line-height: 25px;
    font-size: 20px;
    margin-bottom: 40px;
  `)}
`

const PasswordHeader = styled.h3`
  font-family: 'HK Grotesk Medium';
  font-weight: 500;
  letter-spacing: -0.25px;
  line-height: 22px;
  font-size: 16px;
  margin-top: 24px;
  margin-bottom: 20px;

  ${screen.onlyMobile}
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
  `)}

  ${screen.onDesktop(css`
    text-align: right;
  `)}
`

export { AccountHeader, PasswordHeader, FieldContainer, ButtonContainer }
