import styled from 'styled-components'

import { fonts } from '../../../styles'

const ModalContent = styled.div`
  box-sizing: border-box;
  padding: 24px 24px 16px 24px;
  width: calc(100vw - 32px);
  max-width: 343px;
`

const ModalHeader = styled.h1`
  ${fonts.textHeader}

  margin-bottom: 8px;
  margin-top: 0;
`

const ModalText = styled.p`
  ${fonts.textSmall}

  margin: 0;
`

const ModalAppContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 24px;
  margin-bottom: 32px;
`

const ModalButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  > button:last-child {
    margin-left: 13px;
  }
`

export { ModalContent, ModalHeader, ModalText, ModalAppContainer, ModalButtonContainer }
