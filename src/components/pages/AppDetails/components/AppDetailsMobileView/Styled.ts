import { Link, LinkProps } from 'react-router-dom'
import styled, { css } from 'styled-components'

import { borders, fonts, screen } from '../../../../../styles'
import { MobilePageContainer } from '../../../../shared/MobilePageContainer'

const MobileContainer = styled.div`
  ${screen.onlyMobile}
`

const ImagesContainer = styled.div`
  margin: 52px 0 0 0;
  width: 100%;
  position: relative;
  height: 220px;
`

const PictureContainer = styled.img`
  background: ${props => props.theme.colors.grey};
  position: absolute;
  width: 100%;
  max-height: 160px;
  overflow: hidden;
  top: 0;
  left: 0;
  opacity: 0.99;
`

const PhotoContainer = styled.img`
  position: absolute;
  width: 120px;
  height: 120px;
  border-radius: 8px;
  border: 2px solid rgba(19, 37, 64, 0.08);
  overflow: hidden;
  bottom: 0;
  left: 16px;
  box-sizing: border-box;
`

const FormContainer = styled(MobilePageContainer)`
  ${screen.onMobile(css`
    padding-top: 24px;
    padding-bottom: 0;
  `)}
`

const NameHeader = styled.h3`
  ${fonts.textHeader}

  margin: 0 0 4px 0;
`

const About = styled.div`
  ${fonts.greyText}
  margin-bottom: 24px;
`

const SiteContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-end;
  justify-content: flex-start;
  margin-bottom: 24px;
`

const SiteTitleContainer = styled.div`
  flex-grow: 1;
`

const SiteLabel = styled.h5`
  ${fonts.greyTextLabel}

  margin: 0 0 2px 0;
`

const SiteText = styled.div`
  ${fonts.text}
`

const SiteButton = styled.a`
  display: block;
  padding: 4px 10px 6px 10px;
  border-radius: 4px;
  background-color: #4e71ff;
  color: ${props => props.theme.colors.white};
  font-size: 13px;
  letter-spacing: 0.07px;
  line-height: 18px;
  text-decoration: none;

  :visited,
  :hover {
    color: ${props => props.theme.colors.white};
  }
`

const AttributesContainer = styled.div`
  ${borders.whiteBlock('0', true)}

  width: 100%;
`

const PersonaContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 13px 17px 12px 17px;
  box-sizing: border-box;
`

const PersonaName = styled.strong`
  ${fonts.textBold}
`

const PersonaLink = styled(Link)<LinkProps>`
  ${fonts.textSmall}

  letter-spacing: 0.07px;
  border: 1px solid #edf0f5;
  border-radius: 20px;
  padding: 4.5px 10.5px 6.5px 10.5px;
  box-sizing: border-box;
  text-decoration: none;

  :visited,
  :hover {
    color: #132540;
  }
`

const AttributesDivider = styled.div`
  ${borders.dividerHorizontal('0', '16px')}
`

const AttributesText = styled.div`
  ${fonts.greyText}

  margin: 0 17px 24px 17px;
`

const AttributesList = styled.ul`
  width: 100%;
  box-sizing: border-box;
  list-style: none;
  padding: 0;
  padding: 0 17px 17px 17px;
`

const AttributesRow = styled.li`
  padding: 0;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;

  :not(:first-child) {
    padding-top: 16px;
    border-top: 1px solid #edf0f5;
  }

  :not(:last-child) {
    padding-bottom: 16px;
  }
`

const AttributesLabelContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`

const AttributesHeader = styled.h5`
  ${fonts.greyTextLabel}

  margin: 0 0 2px 0;
`

const AttributesValue = styled.div`
  ${fonts.text}
`

const AttributesImageContainer = styled.img`
  width: 32px;
  height: 32px;
  overflow: hidden;
  border-radius: 4px;
  opacity: 0.99;
  margin-top: 2px;
  margin-bottom: 3px;
  margin-right: 12px;
`

const ButtonsDivider = styled.div`
  ${borders.dividerHorizontal('32px', '32px')}
`

const ButtonsContainer = styled.div`
  margin-bottom: 28px;
`

const ButtonsHeader = styled.h4`
  ${fonts.textLabel}

  margin: 0 0 8px 0;
`

const ButtonsText = styled.div`
  ${fonts.greyText};

  margin: 0 0 16px 0;
`

const ChangesContainer = styled.div`
  padding: 12px 16px;
  box-sizing: border-box;
  width: 100%;
  background: ${props => props.theme.colors.white};
  box-shadow: 0 -1px 0 0 #edf0f5, 0 -4px 16px 0 rgba(83, 98, 124, 0.06);
`

export {
  MobileContainer,
  ImagesContainer,
  PictureContainer,
  PhotoContainer,
  FormContainer,
  NameHeader,
  About,
  SiteContainer,
  SiteTitleContainer,
  SiteButton,
  SiteLabel,
  SiteText,
  AttributesContainer,
  PersonaContainer,
  PersonaName,
  AttributesDivider,
  PersonaLink,
  AttributesText,
  AttributesList,
  AttributesRow,
  AttributesLabelContainer,
  AttributesHeader,
  AttributesValue,
  AttributesImageContainer,
  ButtonsDivider,
  ButtonsContainer,
  ButtonsHeader,
  ButtonsText,
  ChangesContainer,
}
