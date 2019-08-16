import styled from 'styled-components'

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledRow = styled.div`
  display: flex;

  &:not(:first-child) {
    margin-top: 16px;
  }
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
  StyledRow,
  StyledColumn,
}