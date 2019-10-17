import styled from 'styled-components'

const AppsHeader = styled.h3`
  line-height: 21px;
  font-size: 16px;
  letter-spacing: 0.15px;
  margin: 0 0 16px 0;
  font-family: 'SF UI Display Regular';

  @media (max-width: 1443px) {
    display: none;
  }
`

const PageContainer = styled.div`
  @media (max-width: 1443px) {
    margin: 72px 16px 72px 16px;
  }
`

const MobileAppsHeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;

  @media (min-width: 1444px) {
    display: none;
  }
`

const MobileAppsHeader = styled.h3`
  font-family: 'HK Grotesk Medium';
  font-size: 20px;
  font-weight: 600;
  line-height: 28px;
  margin: 0;
`

const NoAppsContainer = styled.div`
  margin-top: 88px;
  margin-bottom: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1444px) {
    display: none;
  }
`

const NoAppsLogo = styled.div`
  width: 290px;
  height: 270px;
  background: #d8d8d8;
  opacity: 0.99;
`

const NoAppsHeader = styled.h3`
  color: #132540;
  font-family: 'HK Grotesk Medium';
  font-size: 15px;
  line-height: 22px;
  font-weight: 600;
  margin-top: 24px;
  margin-bottom: 2px;
`

const NoAppsSubheader = styled.div`
  width: 284px;
  font-family: 'HK Grotesk Medium';
  color: #949eb3;
  font-size: 13px;
  line-height: 18px;
  text-align: center;
`

export {
  AppsHeader,
  PageContainer,
  MobileAppsHeaderContainer,
  MobileAppsHeader,
  NoAppsContainer,
  NoAppsLogo,
  NoAppsHeader,
  NoAppsSubheader,
}
