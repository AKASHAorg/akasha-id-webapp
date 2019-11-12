import Button, { ButtonProps } from '@akashaproject/design-system/dist/components/Button'
import styled from 'styled-components'

import { screen } from '../../../../../styles'

const DesktopContainer = styled.div`
  ${screen.onlyDesktop}
`

const HeaderContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`

const ImageContainer = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 24px;
  background: #f0f0f0;
  overflow: hidden;
`

const NameContainer = styled.div`
  margin-left: 8px;
`

const Name = styled.h3`
  font-family: 'HK Grotesk Medium';
  font-size: 20px;
  font-weight: 500;
  line-height: 25px;
  margin: 0 0 3px 0;
`

const SubheaderContainer = styled.div`
  display: flex;
`

const Status = styled.div`
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

const DateContainer = styled.div`
  line-height: 16px;
  font-size: 11px;
  letter-spacing: 0.06px;
  color: ${props => props.theme.colors.grey};
  padding: 2px 0;
  margin-left: 4px;
`

const DescriptionContainer = styled.div`
  margin-top: 40px;
  display: flex;
  align-items: flex-start;
`

const DescriptionHeader = styled.div`
  margin-bottom: 16px;
  font-size: 16px;
  line-height: 18px;
  letter-spacing: -0.1px;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  > svg {
    margin-right: 8px;
    margin-bottom: 4px;
  }
`

const Description = styled.p`
  margin: 0;
`

const Link = styled.a`
  color: ${props => props.theme.colors.dark};
  text-decoration: none;

  :hover,
  :visited {
    color: ${props => props.theme.colors.dark};
  }
`

const Divider = styled.div`
  height: 1px;
  opacity: 0.5;
  background: ${props => props.theme.colors.lightGrey};
  width: 100%;
  margin: 40px 0 0 0;
`

const AttributesHeader = styled.h4`
  line-height: 18px;
  font-size: 16px;
  letter-spacing: -0.1px;
  margin: 40px 0 24px;
`

const AttributesList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`

const AttributesRow = styled.li`
  margin: 0;
  padding: 8px 0 8px 8px;
  border-bottom: 1px solid ${props => props.theme.colors.darkBackground};

  :first-child {
    border-top: 1px solid ${props => props.theme.colors.darkBackground};
  }
`

const RemoveContainer = styled.div`
  width: 100%;
  margin: 35px 0 0 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const RemoveHeaderContainer = styled.div`
  flex-grow: 1;
`

const RemoveHeader = styled.h4`
  line-height: 20px;
  font-size: 16px;
  font-family: 'HK Grotesk Medium';
  margin: 0 0 4px 0;
  font-weight: 500;
`

const RemoveSubheader = styled.p`
  line-height: 18px;
  font-size: 14px;
  font-family: 'HK Grotesk Medium';
  font-weight: 500;
  color: ${props => props.theme.colors.darkGrey};
  margin: 0;
`

const RemoveButton = styled(Button)<ButtonProps>`
  width: 102px;
  height: 32px;
`

export {
  DesktopContainer,
  HeaderContainer,
  ImageContainer,
  NameContainer,
  Name,
  SubheaderContainer,
  Status,
  DateContainer,
  DescriptionContainer,
  DescriptionHeader,
  Description,
  Link,
  Divider,
  AttributesHeader,
  AttributesList,
  AttributesRow,
  RemoveContainer,
  RemoveHeaderContainer,
  RemoveHeader,
  RemoveSubheader,
  RemoveButton,
}
