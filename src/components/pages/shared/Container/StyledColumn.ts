import styled from 'styled-components'

export interface ColumnProps {
  size: number
}

const StyledColumn = styled.div<ColumnProps>`
  width: calc(91px * ${props => props.size} + 32px * ${props => props.size - 1});

  :not(:last-child) {
    margin-right: 32px;
  }
`

export default StyledColumn
