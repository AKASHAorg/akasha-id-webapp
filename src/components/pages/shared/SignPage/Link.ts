import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Link = styled(NavLink)`
  color: ${props => props.theme.colors.blue};
  text-decoration: none;

  :visited,
  :hover {
    color: ${props => props.theme.colors.blue};
  }
`

export default Link
