import styled from 'styled-components'

const FieldContainer = styled.div`
  margin-bottom: 28px;

  > *:not(:last-child) {
    margin-bottom: 24px;
  }

  @media (max-width: 1443px) {
    margin-top: 28px;
    width: 100%;
  }

  @media (min-width: 1444px) {
    margin-top: 65px;
    width: calc(3 * 91px + 2 * 32px);
  }
`

export default FieldContainer
