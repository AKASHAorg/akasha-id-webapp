import { Link, LinkProps } from 'react-router-dom'
import styled from 'styled-components'

import { fonts } from '../../../../../styles'

const PopoverContent = styled.div`
  padding: 10px 12px 12px 12px;
`

const PopoverMenuList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`

const PopoverMenuRow = styled.li`
  margin: 0;
  padding: 0;

  :not(:last-child) {
    padding-bottom: 10px;
    border-bottom: 1px solid #edf0f5;
  }

  :not(:first-child) {
    padding-top: 10px;
  }
`

const PopoverLink = styled(Link)<LinkProps>`
  ${fonts.textSmall}

  display: flex;
  align-items: center;
  text-decoration: none;

  :visited,
  :hover {
    color: #132540;
  }
`

const PopoverLabel = styled.span`
  margin-left: 4px;
`

export { PopoverContent, PopoverMenuList, PopoverMenuRow, PopoverLink, PopoverLabel }
