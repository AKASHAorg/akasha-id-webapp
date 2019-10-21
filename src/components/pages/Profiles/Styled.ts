import styled, { css } from 'styled-components'

import { fonts, screen } from '../../../styles'
import { ProfilesList } from '../../shared/ProfilesList'

const ProfilesHeader = styled.h3`
  ${screen.onlyDesktop}

  line-height: 21px;
  font-size: 16px;
  letter-spacing: 0.15px;
  margin: 0 0 16px 0;
  font-family: 'SF UI Display Regular';
`

const PageContainer = styled.div`
  ${screen.onMobile(css`
    margin: 72px 16px 72px 16px;
  `)}
`

const MobileProfilesHeaderContainer = styled.div`
  ${screen.onlyMobile}

  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const MobileProfilesHeader = styled.h3`
  ${fonts.textHeader}

  margin: 0;
`

const NoProfilesContainer = styled.div`
  ${screen.onlyMobile}

  margin-top: 88px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const NoProfilesLogo = styled.div`
  width: 224px;
  height: 198px;
  background: #d8d8d8;
  opacity: 0.99;
`

const NoProfilesHeader = styled.h3`
  ${fonts.textBold}

  margin-top: 24px;
  margin-bottom: 2px;
`

const NoProfilesSubheader = styled.div`
  ${fonts.greyText}

  width: 284px;
  text-align: center;
`

const StyledProfilesList = styled(ProfilesList)`
  margin: 20px 0 0 0;
`

export {
  ProfilesHeader,
  PageContainer,
  MobileProfilesHeaderContainer,
  MobileProfilesHeader,
  NoProfilesContainer,
  NoProfilesLogo,
  NoProfilesHeader,
  NoProfilesSubheader,
  StyledProfilesList,
}
