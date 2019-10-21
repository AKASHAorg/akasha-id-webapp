import styled, { css } from 'styled-components'

import { fonts, screen } from '../../../styles'
import { MobilePageContainer } from '../../shared/MobilePageContainer'

const AppsHeader = styled.h3`
  ${screen.onlyDesktop}

  line-height: 21px;
  font-size: 16px;
  letter-spacing: 0.15px;
  margin: 0 0 16px 0;
  font-family: 'SF UI Display Regular';
`

const StyledMobilePageContainer = styled(MobilePageContainer)`
  ${screen.onMobile(css`
    padding-bottom: 76px;
  `)}
`

const MobileAppsHeaderContainer = styled.div`
  ${screen.onlyMobile}

  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`

const MobileAppsHeader = styled.h3`
  ${fonts.textHeader}

  margin: 0;
`

const NoAppsContainer = styled.div`
  ${screen.onlyMobile}

  margin-top: 88px;
  margin-bottom: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const NoAppsLogo = styled.div`
  width: 290px;
  height: 270px;
  background: #d8d8d8;
  opacity: 0.99;
`

const NoAppsHeader = styled.h3`
  ${fonts.textBold}

  margin-top: 24px;
  margin-bottom: 2px;
`

const NoAppsSubheader = styled.div`
  ${fonts.greyText}

  width: 284px;
  text-align: center;
`

export {
  AppsHeader,
  StyledMobilePageContainer as PageContainer,
  MobileAppsHeaderContainer,
  MobileAppsHeader,
  NoAppsContainer,
  NoAppsLogo,
  NoAppsHeader,
  NoAppsSubheader,
}
