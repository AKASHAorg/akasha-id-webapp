import styled from 'styled-components'

const LeftPart = styled.div`
  background: #ffffff;
  display: flex;
  box-sizing: border-box;
  min-height: 100vh;

  @media (max-width: 1443px) {
    width: 100%;
    padding: 24px;
  }

  @media (min-width: 1444px) {
    padding-top: 157px;
    width: calc(6 * 91px + 5 * 32px + 16px);
    margin-right: 16px;
  }
`

export default LeftPart
