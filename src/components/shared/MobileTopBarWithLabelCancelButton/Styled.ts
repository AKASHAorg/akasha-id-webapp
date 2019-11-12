import styled from 'styled-components'

import { fonts } from '../../../styles'

const BackButton = styled.button`
  ${fonts.blueTextSmall}

  top: 16px;
  right: 16px;
  height: 20px;
  padding: 0;
  background: transparent;
  border: none;
  position: absolute;
`

const Label = styled.div`
  ${fonts.textBold}

  flex-grow: 1;
  text-align: center;
`

export { BackButton, Label }
