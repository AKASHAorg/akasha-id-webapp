import styled from 'styled-components'

import { fonts } from '../../../styles'

const ModalContent = styled.div`
  padding: 24px 25px 16px 23px;
  max-width: 343px;
`

const ModalHeader = styled.h1`
  ${fonts.textHeader}

  margin-bottom: 12px;
  margin-top: 0;
`

const ModalText = styled.p`
  ${fonts.textSmall}

  margin: 0;
`

const ModalAppsList = styled.ul`
  margin-top: 20px;
  margin-bottom: 40px;
  list-style: none;
  padding: 0;
`

const ModalAppsRow = styled.li`
  padding: 0;
  display: flex;
  align-items: flex-start;
  width: 100%;

  :not(:last-child) {
    padding-bottom: 16px;
    border-bottom: 1px solid ${props => props.theme.colors.border};
  }

  :not(:first-child) {
    padding-top: 16px;
  }
`

const ModalButtonContainer = styled.div`
  text-align: right;

  > button:last-child {
    margin-left: 13px;
  }
`

export { ModalContent, ModalHeader, ModalText, ModalAppsList, ModalAppsRow, ModalButtonContainer }
