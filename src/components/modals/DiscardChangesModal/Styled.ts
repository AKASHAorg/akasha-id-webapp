import styled from 'styled-components'

import { fonts } from '../../../styles'

const ModalContent = styled.div`
  padding: 16px 24px;
  width: calc(100vw - 64px);
  max-width: 343px;
  box-sizing: border-box;
`

const ModalHeader = styled.h2`
  ${fonts.textHeader}

  margin: 0 0 24px 0;
`

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  > button:last-child {
    margin-left: 12px;
  }
`

export { ModalContent, ModalHeader, ButtonContainer }
