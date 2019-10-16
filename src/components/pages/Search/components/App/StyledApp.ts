import { NavLink, NavLinkProps } from 'react-router-dom'
import styled from 'styled-components'

const StyledRow = styled.li`
  background: ${props => props.theme.colors.white};
  width: 100%;
  box-sizing: border-box;
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 1px;

  :not(:last-child) {
    margin-bottom: 12px;
  }
`

const StyledLink = styled(NavLink)<NavLinkProps>`
  padding: 9px 16px 11px;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`

const StyledImageContainer = styled.div`
  background: #d8d8d8;
  overflow: hidden;
  width: 32px;
  height: 32px;
  border-radius: 16px;

  > img {
    width: 32px;
    height: 32px;
  }
`

const StyledTextContainer = styled.div`
  margin-left: 12px;
  flex-grow: 1;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
`

const StyledHeader = styled.h4`
  color: ${props => props.theme.colors.dark};
  font-size: 13px;
  line-height: 18px;
  font-weight: 500;
  letter-spacing: -0.2px;
  margin: 0;
  font-family: 'HK Grotesk Medium';
`

const StyledSubheader = styled.div`
  color: #a0a7b3;
  font-size: 13px;
  line-height: 18px;
  font-weight: 500;
  letter-spacing: -0.2px;
  margin: 0;
  font-family: 'HK Grotesk Medium';
`

export {
  StyledRow,
  StyledLink,
  StyledImageContainer,
  StyledTextContainer,
  StyledHeader,
  StyledSubheader,
}
