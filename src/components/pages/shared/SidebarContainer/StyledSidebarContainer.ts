import styled from 'styled-components'

const StyledSidebarContainer = styled.div`
  background: #ffffff;
  width: calc(2 * 91px + 2 * 32px);
  height: 100vh;
  position: fixed;
  border-right: 1px solid #f2f2f2;
`

const StyledContentContainer = styled.div`
  margin-left: calc(2 * 91px + 2 * 32px);
  width: calc(1444px - 2 * 91px - 2 * 32px);
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
`

const StyledTopBar = styled.div`
  width: 100%;
  text-align: right;
  padding: 16px 25px 16px 0;
  background: ${props => props.theme.colors.white};

  > a {
    font-family: 'HK Grotesk Medium';
    font-size: 16px;
    line-height: 24px;
    color: ${props => props.theme.colors.dark};
    text-decoration: none;

    :hover,
    :visited {
      color: ${props => props.theme.colors.dark};
    }
  }
`

const StyledContentWrapper = styled.div`
  margin-top: 48px;
  margin-left: calc(2 * 91px + 2 * 32px);
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`

export { StyledSidebarContainer, StyledContentContainer, StyledTopBar, StyledContentWrapper }
