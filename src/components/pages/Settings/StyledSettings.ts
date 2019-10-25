import { Link, LinkProps } from 'react-router-dom'
import styled, { css } from 'styled-components'

import { fonts, screen } from '../../../styles'
import { MobilePageContainer } from '../../shared/MobilePageContainer'

const PageContainer = styled(MobilePageContainer)`
  min-height: 100vh;
  padding: 68px 16px 16px 16px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  box-sizing: border-box;

  ${screen.onMobile(css`
    padding-top: 52px;
    padding-bottom: 16px;
  `)}
`

const MenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
`

const MenuRow = styled.li`
  width: 100%;
  border-bottom: 1px solid ${props => props.theme.colors.border};
  padding: 0;
`

const MenuLink = styled(Link)<LinkProps>`
  ${fonts.text}

  display: flex;
  text-decoration: none;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0 16px 0;

  :hover,
  :visited {
    color: ${props => props.theme.colors.dark};
  }
`

const SignOutBlock = styled.div`
  margin-top: 16px;
`

const SignOutButton = styled.button`
  ${fonts.text}

  border: none;
  background: transparent;
  padding: 0;
  display: flex;
  align-items: center;

  > svg {
    position: relative;
    margin-left: 8px;
  }
`

const Credits = styled.div`
  margin-top: 32px;
  color: #949eb3;
  font-weight: 500;
  letter-spacing: 0.07px;
  font-family: 'HK Grotesk Regular';
  font-size: 12px;
  line-height: 16px;
`

export { PageContainer, MenuList, MenuRow, MenuLink, SignOutBlock, SignOutButton, Credits }
