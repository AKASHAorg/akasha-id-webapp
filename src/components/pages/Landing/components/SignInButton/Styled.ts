import styled from 'styled-components'

import { fonts } from '../../../../../styles'

const StyledSignInButton = styled.button`
  ${fonts.text}

  width: 100%;
  padding-top: 8px;
  padding-bottom: 10px;
  background: ${props => props.theme.colors.white};
  border-radius: 4px;
  box-shadow: 0 4px 16px 0 rgba(83, 98, 124, 0.06);
  border: 1px solid #edf0f5;
  box-sizing: border-box;

  :not(:last-child) {
    margin-bottom: 12px;
  }
`

export default StyledSignInButton
