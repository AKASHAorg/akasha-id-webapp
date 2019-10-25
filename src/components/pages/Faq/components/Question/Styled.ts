import styled, { css } from 'styled-components'

import { fonts } from '../../../../../styles'

export interface RowProps {
  opened: boolean
}

const Row = styled.li<RowProps>`
  padding: 0;
  display: flex;
  align-items: stretch;
  justify-content: flex-start;
  flex-direction: column;

  :not(:first-child) {
    padding-top: 16px;
    border-top: 1px solid #edf0f5;
  }

  :not(:last-child) {
    ${props =>
      !props.opened &&
      css`
        padding-bottom: 16px;
      `}

    ${props =>
      props.opened &&
      css`
        padding-bottom: 20px;
      `}
  }
`

const QuestionButton = styled.button`
  border: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: transparent;
  cursor: pointer;
  outline: 0;
`

const QuestionText = styled.h4`
  ${fonts.text}

  margin: 0;
`

const Answer = styled.p`
  ${fonts.greyText}

  margin: 8px 0 0 0;
`

export { Row, QuestionButton, QuestionText, Answer }
