import Button from '@akashaproject/design-system/dist/components/Button'
import styled from 'styled-components'

import { screen } from '../../../../styles'

const PageContainer = styled.div`
  ${screen.onlyDesktop}
`

const UserNameHeader = styled.h3`
  line-height: 25px;
  font-family: 'HK Grotesk Medium';
  font-size: 20px;
  font-weight: 500;
  margin: 0 0 8px 0;
`

const DateContainer = styled.div`
  color: ${props => props.theme.colors.darkGrey};
  letter-spacing: -0.08px;
  margin-bottom: 40px;
`

const DateDivider = styled.span`
  margin: 0 13px;
`

const RowDivider = styled.div`
  flex-grow: 0;
  width: 32px;
`

const ImageContainer = styled.div`
  ${screen.onlyDesktop}

  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  > div:last-child {
    flex-grow: 1;
  }
`

const PhotoContainer = styled.div`
  background: ${props => props.theme.colors.white};
  border: 0;
  border-radius: 62px;
  width: 124px;
  height: 124px;
  overflow: hidden;

  img {
    width: 124px;
    height: 124px;
  }
`

const PictureContainer = styled.div`
  background: ${props => props.theme.colors.white};
  border: 1px solid #f2f2f2;
  width: 100%;
  height: 124px;
  overflow: hidden;
  margin-bottom: 32px;

  img {
    width: 100%;
    height: 124px;
  }
`

const NameContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 32px;

  > div:not(:nth-child(2)) {
    flex-grow: 1;
  }
`

const AboutContainer = styled.div`
  margin-bottom: 40px;
`

const AboutFootnote = styled.div`
  margin-top: 8px;
  font-size: 9px;
  line-height: 11px;
  letter-spacing: 0.17px;
  color: ${props => props.theme.colors.darkGrey};
`

const ButtonContainer = styled.div`
  text-align: right;

  > button:last-child {
    margin-left: 8px;
  }
`

const StyledButton = styled(Button)`
  width: 82px;
`

const Divider = styled.div`
  opacity: 0.5;
  width: 100%;
  height: 1px;
  background: ${props => props.theme.colors.lightGrey};
  margin: 40px 0;
`

const DeleteContainer = styled.div`
  border: 1px solid ${props => props.theme.colors.lightGrey};
  background: #f2f2f2;
  border-radius: ${props => props.theme.shapes.borderRadius};
  padding: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const DeleteTextContainer = styled.div`
  width: 423px;
`

const DeleteHeader = styled.h3`
  font-family: 'HK Grotesk Medium';
  line-height: 20px;
  font-size: 16px;
  margin: 0 0 8px 0;
`

const DeleteText = styled.p`
  font-family: 'HK Grotesk Medium';
  line-height: 18px;
  font-size: 14px;
  margin: 0;
  color: ${props => props.theme.colors.darkGrey};
`

export {
  PageContainer,
  UserNameHeader,
  DateContainer,
  DateDivider,
  ImageContainer,
  PhotoContainer,
  PictureContainer,
  NameContainer,
  AboutContainer,
  AboutFootnote,
  ButtonContainer,
  StyledButton,
  RowDivider,
  Divider,
  DeleteContainer,
  DeleteTextContainer,
  DeleteHeader,
  DeleteText,
}
