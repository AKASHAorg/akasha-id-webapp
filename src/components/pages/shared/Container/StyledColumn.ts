import styled from 'styled-components'

export interface ColumnProps {
  size: number
}

const StyledColumn = styled.div<ColumnProps>`
  width: calc(66px * ${props => props.size} + 8px * ${props => props.size - 1});

  :not(:last-child) {
    margin-right: 8px;
  }
`

export default StyledColumn
