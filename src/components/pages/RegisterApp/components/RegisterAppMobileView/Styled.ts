import { Link, LinkProps } from 'react-router-dom'
import styled, { css } from 'styled-components'

import { borders, fonts, screen } from '../../../../../styles'
import { MobilePageContainer } from '../../../../shared/MobilePageContainer'

const StyledPageContainer = styled(MobilePageContainer)`
  ${screen.onMobile(css`
    padding-top: 76px;
    padding-bottom: 96px;
  `)}
`

const TopText = styled.div`
  ${fonts.text}

  margin-bottom: 15px;
`

const AppContainer = styled.div`
  ${borders.whiteBlock('13px 17px')}

  width: 100%;
`

const AppHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`

const AppDivider = styled.div`
  ${borders.dividerHorizontal('12px', '12px')}
`

const AppWarning = styled.p`
  ${fonts.greyText}

  margin: 0;
`

const AppNonce = styled.span`
  color: #4e71ff;
`

const ProfilesContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  margin-top: 32px;
`

const ProfilesHeader = styled.h4`
  ${fonts.textLabel}

  margin: 0 0 15px 0;
`

const ProfilesList = styled.ul`
  width: 100%;
  box-sizing: border-box;
  padding: 0;
  list-style: none;
`

export interface ProfileRowProps {
  selected: boolean
}

const ProfileRow = styled.div<ProfileRowProps>`
  ${props => borders.whiteBlock('0', props.selected)}

  width: 100%;
  display: flex;
  align-items: stretch;
  justify-content: flex-start;
  flex-direction: column;

  :not(:first-child) {
    margin-top: 8px;
  }
`

const ProfileNameContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 12px 16px;
`

const ProfileName = styled.h5`
  ${fonts.text}

  flex-grow: 1;
  margin: 0;
`

const ProfileDivider = styled.div`
  ${borders.dividerHorizontal('0', '16px')}
`

const ProfileAttributesHeader = styled.div`
  ${fonts.greyText}

  margin: 0 17px;
`

const ProfileAttributesList = styled.ul`
  margin: 24px 17px 17px 17px;
  list-style: none;
  padding: 0;
`

const ProfileAttributesRow = styled.li`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin: 0;
  padding: 0;

  :not(:first-child) {
    border-top: 1px solid #edf0f5;
    padding-top: 16px;
  }

  :not(:last-child) {
    padding-bottom: 16px;
  }
`

const ProfileAttributesLabel = styled.h5`
  ${fonts.greyTextLabel}

  margin: 0 0 2px 0;
`

const ProfileAttributesText = styled.div`
  ${fonts.text}
`

const AddProfileLink = styled(Link)<LinkProps>`
  margin-top: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 100%;
  border: 1px solid #edf0f5;
  border-radius: 4px;
  box-shadow: 0 4px 16px 0 rgba(83, 98, 124, 0.06);
  background: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.blue};
  text-decoration: none;
  font-size: 15px;
  line-height: 22px;
  font-family: 'HK Grotesk Regular';
  padding-top: 8px;
  padding-bottom: 10px;

  :visited,
  :hover {
    color: ${props => props.theme.colors.blue};
  }
`

const MobileBottomContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 64px;
  padding: 12px 16px;
  background: ${props => props.theme.colors.white};
  box-shadow: 0 -1px 0 0 #edf0f5, 0 -4px 16px 0 rgba(83, 98, 124, 0.06);
  box-sizing: border-box;
`

export {
  StyledPageContainer,
  TopText,
  AppContainer,
  AppHeader,
  AppDivider,
  AppWarning,
  AppNonce,
  ProfilesContainer,
  ProfilesHeader,
  ProfilesList,
  ProfileRow,
  ProfileNameContainer,
  ProfileName,
  ProfileDivider,
  ProfileAttributesHeader,
  ProfileAttributesList,
  ProfileAttributesRow,
  ProfileAttributesLabel,
  ProfileAttributesText,
  AddProfileLink,
  MobileBottomContainer,
}
