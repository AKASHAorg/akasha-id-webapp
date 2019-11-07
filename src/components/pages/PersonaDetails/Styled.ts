import styled, { css } from 'styled-components'

import { borders, fonts, screen } from '../../../styles'
import { MobilePageContainer } from '../../shared/MobilePageContainer'

const BackButton = styled.button`
  width: 20px;
  height: 20px;
  padding: 0;
  background: transparent;
  border: none;
`

const TopContainerLabel = styled.div`
  ${fonts.textBold}

  flex-grow: 1;
  letter-spacing: -0.25px;
  text-align: center;
`

const ImagesContainer = styled.div`
  margin: 52px 0 0 0;
  width: 100%;
  position: relative;
  height: 220px;
`

const CoverImageContainer = styled.img`
  position: relative;
  width: 100%;
  max-height: 160px;
  overflow: hidden;
  opacity: 0.99;
`

const PictureButton = styled.button`
  opacity: 0.5;
  border-radius: 4px;
  background-color: #132540;
  padding: 4px 10px 6px 10px;
  color: ${props => props.theme.colors.white};
  font-family: 'HK Grotesk Medium';
  font-size: 13px;
  letter-spacing: 0.07px;
  line-height: 18px;
  position: absolute;
  bottom: 78px;
  right: 22px;
  border: none;
  outline: none;

  > svg {
    position: relative;
    top: 3px;
    left: -2px;
  }
`

const AvatarContainer = styled.img`
  position: absolute;
  width: 120px;
  height: 120px;
  border-radius: 60px;
  border: 2px solid #edf0f5;
  overflow: hidden;
  bottom: 0;
  left: 16px;
  box-sizing: border-box;
`

const PhotoButton = styled.button`
  box-sizing: border-box;
  width: 30px;
  height: 30px;
  border: 1px solid ${props => props.theme.colors.white};
  border-radius: 14px;
  background-color: #949eb3;
  padding: 7px;
  color: ${props => props.theme.colors.white};
  position: absolute;
  bottom: 0;
  left: 108px;
  outline: none;

  > svg {
    position: relative;
    top: -2px;
    left: -0.5px;
  }
`

const FormContainer = styled(MobilePageContainer)`
  ${screen.onMobile(css`
    padding-top: 24px;
  `)}
`

const NameHeader = styled.h3`
  ${fonts.textHeader}

  margin: 0;
`

const Description = styled.div`
  ${fonts.greyTextBig}
`

const HeaderDivider = styled.div`
  ${borders.dividerHorizontal('24px', '24px')}
`

const FormData = styled.ul`
  list-style: none;
  margin: 0 0 24px 0;
  padding: 0;
`

const FormDataRow = styled.li`
  ${fonts.text}

  padding: 0;

  :not(:last-child) {
    margin-bottom: 20px;
  }
`

const FormDataRowHeader = styled.h5`
  ${fonts.greyTextLabel}

  margin: 0 0 2px 0;
`

const AppsContainer = styled.div`
  ${borders.whiteBlock('12px 16px', true)}

  width: 100%;
`

export interface AppsHeaderProps {
  withApps: boolean
}

const AppsHeader = styled.h4<AppsHeaderProps>`
  ${fonts.textLabel}

  margin: 0 0 ${props => (props.withApps ? '20px' : '12px')} 0;
`

const AppsAddAppText = styled.div`
  ${fonts.greyText}

  margin-bottom: 8px;
`

const DeleteDivider = styled.div`
  ${borders.dividerHorizontal('32px', '32px')}
`

const DeleteHeader = styled.h4`
  ${fonts.textLabel}

  margin: 0 0 12px 0;
`

const DeleteText = styled.div`
  ${fonts.greyText}

  margin-bottom: 8px;
`

const AppsList = styled.ul`
  padding: 0;
  list-style: none;
  margin-bottom: 20px;
  width: 100%;
`

export {
  BackButton,
  TopContainerLabel,
  ImagesContainer,
  CoverImageContainer,
  PictureButton,
  AvatarContainer,
  PhotoButton,
  FormContainer,
  NameHeader,
  Description,
  HeaderDivider,
  FormData,
  FormDataRow,
  FormDataRowHeader,
  AppsContainer,
  AppsHeader,
  AppsAddAppText,
  DeleteDivider,
  DeleteHeader,
  DeleteText,
  AppsList,
}
