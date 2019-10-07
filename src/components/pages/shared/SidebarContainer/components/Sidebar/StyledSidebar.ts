import styled from 'styled-components'

const TopContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  font-family: 'HK Grotesk Medium';
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
`

const Logo = styled.div`
  margin-left: 24px;
  margin-top: 16px;
  margin-bottom: 40px;
  color: ${props => props.theme.colors.dark};
`

const MenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
`

const MenuItem = styled.li`
  width: 100%;

  & > a {
    width: 100%;
    box-sizing: border-box;
    padding: 12px 0 12px 24px;
    color: ${props => props.theme.colors.grey};
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    &:visited {
      color: ${props => props.theme.colors.grey};
    }

    &.active {
      background: #f2f2f2;
      border-left: 2px solid ${props => props.theme.colors.dark};
      color: ${props => props.theme.colors.dark};

      > svg * {
        stroke: ${props => props.theme.colors.dark};
      }
    }

    > svg {
      margin-right: 16px;
      margin-bottom: 4px;
    }
  }
`

const BottomContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
`

const SignOut = styled.button`
  background: transparent;
  border: 0;
  padding: 0;
  margin-left: 24px;
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  :hover {
    cursor: pointer;
  }

  :focus {
    outline: 0;
  }

  > svg {
    margin-bottom: 4px;
  }

  > div {
    margin-left: 8px;
    color: ${props => props.theme.colors.grey};
    font-family: 'HK Grotesk Medium';
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
  }
`

export { TopContainer, Logo, MenuList, MenuItem, BottomContainer, SignOut }
