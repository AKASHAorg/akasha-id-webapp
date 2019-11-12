import styled, { css } from 'styled-components'

export interface ColumnProps {
  size: number
  hideMobile?: boolean
  hideDesktop?: boolean
}

const StyledColumn = styled.div<ColumnProps>`
  @media (max-width: 1443px) {
    width: 100%;

    ${props => {
      if (props.hideMobile) {
        return css`
          display: none;
        `
      }
    }}
  }

  @media (min-width: 1444px) {
    width: calc(91px * ${props => props.size} + 32px * ${props => props.size - 1});

    :not(:last-child) {
      margin-right: 32px;
    }

    ${props => {
      if (props.hideDesktop) {
        return css`
          display: none;
        `
      }
    }}
  }
`

export default StyledColumn
