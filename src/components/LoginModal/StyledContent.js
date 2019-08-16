import styled from 'styled-components'

const StyledContent = styled.div`
  display: flex;
`

const StyledColumn = styled.div`
  display: flex;
  align-items: center;

  &:first-child {
    width: 100px;
    flex-grow: 0;
  }

  &:not(:first-child) {
    flex-grow: 1;
  }
`

export {
  StyledContent,
  StyledColumn,
}