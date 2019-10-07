import styled from 'styled-components'

const HeaderContainer = styled.div`
  margin: 32px 32.5px;
  text-align: center;
`

const Header = styled.h3`
  font-size: 16px;
  line-height: 21px;
  letter-spacing: 0.15px;
  margin: 0 0 8px 0;
  font-family: 'SF UI Display Regular';
`

const Subheader = styled.p`
  color: ${props => props.theme.colors.grey};
  margin: 0 0 0 0;
`

const Divider = styled.div`
  height: 1px;
  background: ${props => props.theme.colors.darkBackground};
  width: calc(100% - 65px);
  margin: 32px 32.5px 0;
`

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  > div {
    box-sizing: border-box;
    padding-top: 32px;
    padding-bottom: 32px;
  }

  > div:first-child {
    padding-left: 32.5px;
  }

  > div:last-child {
    padding-right: 32.5px;
  }
`

const NameContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 16px;
`

const ImageContainer = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  overflow: hidden;
  margin-right: 8px;
  background: #f0f0f0;

  > img {
    width: 32px;
    height: 32px;
  }
`

const Name = styled.h4`
  font-family: 'HK Grotest Medium';
  font-size: 16px;
  line-height: 20px;
  font-weight: 500;
  margin: 0;
`

const ContentHeader = styled.h5`
  font-size: 13px;
  letter-spacing: -0.08px;
  line-height: 18px;
  margin-top: 0;
  margin-bottom: 8px;
  font-weight: normal;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  > svg {
    margin-right: 4px;
    margin-bottom: 2px;
  }
`

const Link = styled.div`
  margin-bottom: 16px;

  > a {
    color: ${props => props.theme.colors.dark};
    text-decoration: none;

    :visited,
    :hover {
      color: ${props => props.theme.colors.dark};
    }
  }
`

const Description = styled.p`
  margin: 8px 0 0 0;
`

const AttributesHeader = styled.h5`
  font-size: 13px;
  letter-spacing: -0.08px;
  line-height: 18px;
  margin-top: 0;
  margin-bottom: 24px;
  font-weight: normal;
`

const AttributesList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`

const Attribute = styled.li`
  margin: 0;
  padding: 8px 0 8px 8px;
  border-bottom: 1px solid ${props => props.theme.colors.darkBackground};

  :first-child {
    border-top: 1px solid ${props => props.theme.colors.darkBackground};
  }
`

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 19px 32.5px 32.5px;
`

const Notification = styled.p`
  margin: 0;
`

const Nonce = styled.strong`
  font-weight: 600;
  letter-spacing: -0.08px;
  font-family: 'SF UI Text Semibold';
`

const ButtonContainer = styled.div`
  text-align: right;

  > button {
    width: 86px;

    :first-child {
      margin-right: 8px;
    }
  }
`

export {
  HeaderContainer,
  Header,
  Subheader,
  Divider,
  ContentContainer,
  NameContainer,
  ImageContainer,
  Name,
  ContentHeader,
  Link,
  Description,
  AttributesHeader,
  AttributesList,
  Attribute,
  FooterContainer,
  Notification,
  Nonce,
  ButtonContainer,
}
