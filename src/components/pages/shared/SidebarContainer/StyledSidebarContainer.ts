import styled, { css } from 'styled-components'

import { screen } from '../../../../styles'

const StyledSidebarContainer = styled.div`
  ${screen.onlyDesktop}

  background: ${props => props.theme.colors.white};
  width: calc(2 * 91px + 2 * 32px);
  height: 100vh;
  position: fixed;
  border-right: 1px solid #f2f2f2;
`

const StyledContentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;

  ${screen.onMobile(css`
    width: 100%;
    margin-left: 0;
  `)}

  ${screen.onDesktop(css`
    margin-left: calc(2 * 91px + 2 * 32px);
    width: calc(1444px - 2 * 91px - 2 * 32px);
  `)}
`

const StyledTopBar = styled.div`
  ${screen.onlyDesktop}

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
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  ${screen.onMobile(css`
    margin: 0;
    width: 100%;
  `)}

  ${screen.onDesktop(css`
    margin-top: 48px;
    margin-left: calc(2 * 91px + 2 * 32px);
  `)}
`

export { StyledSidebarContainer, StyledContentContainer, StyledTopBar, StyledContentWrapper }
