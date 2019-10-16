import styled from 'styled-components'

const StyledContainer = styled.div`
  @media (max-width: 1443px) {
    width: 100vw;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
    flex-wrap: wrap;
  }

  @media (min-width: 1444px) {
    width: 1444px;
    margin: 0 calc(50vw - 722px);
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
  }
`

export default StyledContainer
