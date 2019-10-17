import { NavLink, NavLinkProps } from 'react-router-dom'
import styled from 'styled-components'

const BottomHeader = styled.div`
  position: fixed;
  box-sizing: border-box;
  width: 100%;
  height: 60px;
  display: flex;
  background: #fff;
  bottom: 0;
  left: 0;
  box-shadow: 0 -1px 0 0 #edf0f5, 0 -4px 16px 0 rgba(83, 98, 124, 0.06);

  @media (min-width: 1444px) {
    display: none;
  }
`

const PageLink = styled(NavLink)<NavLinkProps>`
  display: flex;
  width: 50%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #fff;

  color: #b6bfd1;
  text-decoration: none;

  :visited,
  :hover {
    color: #b6bfd1;
  }

  > div {
    box-sizing: border-box;
    height: 20px;
    width: 36px;
    border: 1px solid #a0a7b3;
    border-radius: 0;
  }

  > h4 {
    font-size: 11px;
    line-height: 13px;
    font-family: 'HK Grotesk Medium';
    font-weight: 500;
    text-transform: uppercase;
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
