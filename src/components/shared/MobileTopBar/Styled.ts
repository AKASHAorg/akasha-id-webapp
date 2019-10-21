import { NavLink, NavLinkProps } from 'react-router-dom'
import styled from 'styled-components'

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

export { TopHeader, TopHeaderGrey, TopSpace, SearchLink, MenuLink }
