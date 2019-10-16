import styled from 'styled-components'

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: 8px;
  margin-bottom: 40px;

  @media (min-width: 1444px) {
    display: none;
  }
`

export default IconContainer
