import { NavLink, NavLinkProps } from 'react-router-dom'
import styled from 'styled-components'

import { borders, fonts, screen } from '../../../styles'

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`

const IconContainer = styled.div`
  ${screen.onlyMobile}

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-top: 8px;
  margin-bottom: 32px;
`

const IconLabel = styled.div`
  margin-top: 12px;
  font-family: 'SF UI Display Regular';
  font-size: 16px;
  line-height: 18px;
  color: ${props => props.theme.colors.dark};
  text-transform: uppercase;
`

const IconLabelGrey = styled.span`
  color: #949eb3;
`

const LogoWithoutUsers = styled.div`
  width: 227px;
  height: 227px;
  background: #d8d8d8;
  opacity: 0.9;
`

const LogoWithUsers = styled.div`
  width: 269px;
  height: 269px;
  background: #d8d8d8;
  opacity: 0.9;
`

const Header = styled.h1`
  ${fonts.textHeader}

  margin-top: 32px;
  margin-bottom: 4px;
  text-align: center;
`

const PaleText = styled.p`
  ${fonts.greyTextBig}

  margin: 0;
  text-align: center;
  width: 270px;
`

export interface DotProps {
  active: boolean
}

const DotContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
  margin-bottom: 32px;
`

const Dot = styled.div<DotProps>`
  background: ${props => (props.active ? props.theme.colors.blue : '#DFE3EB')};
  width: ${props => (props.active ? 10 : 5)}px;
  height: 5px;
  border-radius: 2.5px;

  :not(:last-child) {
    margin-right: 6px;
  }
`

const DividerContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
`

const DividerText = styled.div`
  padding: 0 4px;
  font-family: 'HK Grotesk Medium';
  font-size: 11px;
  line-height: 13px;
  font-weight: 500;
  color: #b6bfd1;
`

const DividerBorder = styled.div`
  ${borders.dividerHorizontal('0', '0')}
`

const SignInButtonContainer = styled.div`
  margin-top: 32px;
`

const SignInLink = styled(NavLink)<NavLinkProps>`
  margin-top: 20px;
  margin-bottom: 8px;
  font-size: 15px;
  line-height: 22px;
  font-family: 'HK Grotesk Medium';
  color: ${props => props.theme.colors.blue};
  text-decoration: none;

  :visited,
  :hover {
    color: ${props => props.theme.colors.blue};
  }
`

export {
  PageContainer,
  IconContainer,
  LogoWithoutUsers,
  LogoWithUsers,
  Header,
  PaleText,
  DotContainer,
  Dot,
  DividerContainer,
  DividerText,
  DividerBorder,
  SignInButtonContainer,
  IconLabel,
  IconLabelGrey,
  SignInLink,
}
