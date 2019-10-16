import { Link, LinkProps } from 'react-router-dom'
import styled from 'styled-components'

const TopContainer = styled.div`
  width: 100vw;
  height: 56px;
  display: flex;
  background: #fff;
  box-shadow: 0 1px 0 0 rgba(46, 55, 71, 0.1);
  opacity: 0.99;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  padding: 18px 16px;
`

const BackButton = styled.button`
  width: 21px;
  height: 21px;
  padding: 0;
  background: transparent;
  border: none;
`

const PageContainer = styled.div`
  min-height: calc(100vh - 56px);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0 24px;
`

const MenuList = styled.ul`
  list-style: none;
  padding: 0;
  width: 100%;
`

const MenuRow = styled.li`
  width: 100%;
  border-bottom: 1px solid ${props => props.theme.colors.border};
`

const MenuLink = styled(Link)<LinkProps>`
  display: flex;
  color: ${props => props.theme.colors.dark};
  text-decoration: none;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 24px 0 25px 0;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: -0.25px;
  font-family: 'HK Grotesk Medium';
  font-weight: 500;

  :hover,
  :visited {
    color: ${props => props.theme.colors.dark};
  }
`

const SignOutButton = styled.button`
  border: none;
  background: transparent;
  color: ${props => props.theme.colors.dark};
  font-size: 16px;
  line-height: 22px;
  letter-spacing: -0.25px;
  font-family: 'HK Grotesk Medium';
  font-weight: 500;
  padding: 0;
  display: flex;
  align-items: flex-start;

  > svg {
    position: relative;
    top: -2px;
  }

  > span {
    margin-left: 11.5px;
  }
`

const Version = styled.div`
  margin-top: 32px;
  letter-spacing: -0.2px;
  font-family: 'HK Grotesk Medium';
  color: #a0a7b3;
  font-size: 13px;
  line-height: 18px;
  font-weight: 500;
`

const Credits = styled.div`
  margin-top: 4px;
  letter-spacing: -0.2px;
  font-family: 'HK Grotesk Medium';
  color: #a0a7b3;
  font-size: 13px;
  line-height: 18px;
  font-weight: 500;
  margin-bottom: 20px;
`

export {
  TopContainer,
  BackButton,
  PageContainer,
  MenuList,
  MenuRow,
  MenuLink,
  SignOutButton,
  Version,
  Credits,
}
