import { NavLink, NavLinkProps } from 'react-router-dom'
import styled from 'styled-components'

const TopContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 52px;
  display: flex;
  background: #fff;
  box-shadow: 0 1px 0 0 #edf0f5, 0 4px 16px 0 rgba(83, 98, 124, 0.06);
  align-items: center;
  justify-content: flex-start;
  top: 0;
  left: 0;
  box-sizing: border-box;
  padding: 16px;
  z-index: 10;

  @media (min-width: 1444px) {
    display: none;
  }
`

const TopHeader = styled.h4`
  font-family: 'SF UI Display Regular';
  font-size: 12.8px;
  line-height: 15px;
  color: ${props => props.theme.colors.dark};
  text-transform: uppercase;
  margin: 0 0 0 8px;
`

const TopHeaderGrey = styled.span`
  color: #949eb3;
`

const TopSpace = styled.div`
  flex-grow: 1;
`

const SearchLink = styled(NavLink)<NavLinkProps>`
  height: 20px;
`

const MenuLink = styled(NavLink)<NavLinkProps>`
  margin-left: 16px;
  height: 20px;
`

export { TopContainer, TopHeader, TopHeaderGrey, TopSpace, SearchLink, MenuLink }
