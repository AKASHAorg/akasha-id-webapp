import styled from 'styled-components'

const Row = styled.li`
  padding: 0;
  display: flex;
  align-items: flex-start;
  width: 100%;

  :not(:last-child) {
    padding-bottom: 16px;
    border-bottom: 1px solid #edf0f5;
  }

  :not(:first-child) {
    padding-top: 16px;
  }
`

export { Row }
