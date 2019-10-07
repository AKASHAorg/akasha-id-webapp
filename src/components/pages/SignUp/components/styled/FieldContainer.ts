import styled from 'styled-components'

const FieldContainer = styled.div`
  margin-top: 65px;
  width: calc(3 * 91px + 2 * 32px);

  > *:not(:last-child) {
    margin-bottom: 24px;
  }
`

export default FieldContainer
