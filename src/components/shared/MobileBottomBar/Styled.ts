import { NavLink, NavLinkProps } from 'react-router-dom'
import styled from 'styled-components'

import { fonts, screen } from '../../../styles'

const BottomHeader = styled.div`
  ${screen.onlyMobile}

  position: fixed;
  box-sizing: border-box;
  width: 100%;
  height: 60px;
  display: flex;
  background: ${props => props.theme.colors.white};
  bottom: 0;
  left: 0;
  box-shadow: 0 -1px 0 0 #edf0f5, 0 -4px 16px 0 rgba(83, 98, 124, 0.06);
`

const PageLink = styled(NavLink)<NavLinkProps>`
  display: flex;
  width: 50%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.colors.white};

  color: #b6bfd1;
  text-decoration: none;

  :visited,
  :hover {
    color: #b6bfd1;
  }

  > svg {
    box-sizing: border-box;
    height: 26px;
    width: 26px;
    stroke: ${props => props.theme.colors.dark};
  }

  > h4 {
    ${fonts.textLabel}

    margin-top: 6px;
    margin-bottom: 0;
  }

  &.active {
    color: ${props => props.theme.colors.blue};
    box-shadow: 0 -1px 0 0 #4e71ff;

    > div {
      border-color: ${props => props.theme.colors.blue};
    }
  }
`

export { BottomHeader, PageLink }
