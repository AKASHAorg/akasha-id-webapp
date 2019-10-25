import { NavLink, NavLinkProps } from 'react-router-dom'
import styled, { css } from 'styled-components'

import { borders, fonts, screen } from '../../../../../styles'

const StyledRow = styled.li`
  ${borders.whiteBlock('0', false)}

  width: 100%;

  ${screen.onMobile(css`
    :not(:last-child) {
      margin-bottom: 8px;
    }
  `)}

  ${screen.onDesktop(css`
    border-radius: 1px;

    :not(:last-child) {
      margin-bottom: 16px;
    }
  `)}
`

const StyledLink = styled(NavLink)<NavLinkProps>`
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  ${screen.onMobile(css`
    padding: 10px 16px 12px 16px;
  `)}

  ${screen.onDesktop(css`
    padding: 24px;
  `)}
`

const StyledStatus = styled.div`
  ${screen.onlyDesktop}

  line-height: 12px;
  font-size: 10px;
  letter-spacing: 0.12px;
  padding: 4px 6px;
  border-radius: ${props => props.theme.shapes.borderRadius};
  background: #f3f3f4;
  height: 20px;
  box-sizing: border-box;
  text-transform: uppercase;
  color: ${props => props.theme.colors.darkGrey};
`

const StyledDate = styled.div`
  ${screen.onlyDesktop}

  line-height: 16px;
  font-size: 11px;
  letter-spacing: 0.06px;
  color: ${props => props.theme.colors.grey};
  padding: 2px 0;
  margin-left: 4px;
`

const StyledDescription = styled.div`
  ${fonts.greyText}
  ${screen.onlyMobile}
`

export { StyledRow, StyledStatus, StyledDate, StyledLink, StyledDescription }
