import { NavLink, NavLinkProps } from 'react-router-dom'
import styled from 'styled-components'

const StyledRow = styled.li`
  background: ${props => props.theme.colors.white};
  width: 100%;
  box-sizing: border-box;
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 1px;
  padding: 24px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  :not(:last-child) {
    margin-bottom: 16px;
  }
`

const StyledImageContainer = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background: #f0f0f0;
  overflow: hidden;

  > img {
    width: 40px;
    height: 40px;
  }
`

const StyledTextContainer = styled.div`
  margin-left: 8px;
  flex-grow: 1;
`

const StyledHeader = styled.h4`
  line-height: 20px;
  font-weight: 600;
  letter-spacing: -0.08px;
  margin: 0 0 2px 0;
  font-family: 'SF UI Text Semibold';
`

const StyledSubheaderContainer = styled.div`
  display: flex;
`

const StyledStatus = styled.div`
  line-height: 12px;
  font-size: 10px;
  letter-spacing: 0.12px;
  padding: 4px 6px;
  border-radius: ${props => props.theme.shapes.borderRadius};
  background: #f3f3f4;
  height: 20px;
  box-sizing: border-box;
  text-transform: uppercase;
`

const StyledDate = styled.div`
  line-height: 16px;
  font-size: 11px;
  letter-spacing: 0.06px;
  color: ${props => props.theme.colors.grey};
  padding: 2px 0;
  margin-left: 4px;
`

const StyledLink = styled(NavLink)<NavLinkProps>`
  border: 0;
  color: ${props => props.theme.colors.dark};
  line-height: 20px;
  letter-spacing: -0.08px;
  height: 20px;
  padding: 0;
  outline: 0;
  margin-top: 15px;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  > svg {
    margin-left: 8px;
    margin-bottom: 2px;
  }
`

export {
  StyledRow,
  StyledImageContainer,
  StyledTextContainer,
  StyledHeader,
  StyledSubheaderContainer,
  StyledStatus,
  StyledDate,
  StyledLink,
}
