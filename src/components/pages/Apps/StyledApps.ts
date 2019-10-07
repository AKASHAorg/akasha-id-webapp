import styled from 'styled-components'

const StyledAppsList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  list-style: none;
`

const AppsHeader = styled.h3`
  line-height: 21px;
  font-size: 16px;
  letter-spacing: 0.15px;
  margin: 0 0 16px 0;
  font-family: 'SF UI Display Regular';
`

export { StyledAppsList, AppsHeader }
