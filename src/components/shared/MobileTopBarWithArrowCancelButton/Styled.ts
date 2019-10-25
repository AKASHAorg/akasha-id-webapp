import styled from 'styled-components'

import { fonts } from '../../../styles'

const BackButton = styled.button`
  top: 16px;
  left: 16px;
  width: 20px;
  height: 20px;
  padding: 0;
  background: transparent;
  border: none;
  position: absolute;
  outline: none;
`

const Label = styled.div`
  ${fonts.textBold}

  flex-grow: 1;
  text-align: center;
`

export { BackButton, Label }
