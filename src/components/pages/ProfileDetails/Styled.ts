import styled from 'styled-components'

const MobileTopContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 52px;
  display: flex;
  padding: 16px;
  background: #fff;
  box-shadow: 0 1px 0 0 #edf0f5, 0 4px 16px 0 rgba(83, 98, 124, 0.06);
  align-items: center;
  justify-content: flex-start;
  top: 0;
  left: 0;
  box-sizing: border-box;
  z-index: 10;

  @media (min-width: 1444px) {
    display: none;
  }
`

const BackButton = styled.button`
  width: 20px;
  height: 20px;
  padding: 0;
  background: transparent;
  border: none;
`

const TopContainerLabel = styled.div`
  flex-grow: 1;
  color: #132540;
  font-family: 'HK Grotesk Medium';
  font-size: 15px;
  line-height: 22px;
  letter-spacing: -0.25px;
  font-weight: 600;
  text-align: center;
`

const ImagesContainer = styled.div`
  margin: 52px 0 0 0;
  width: 100%;
  position: relative;
  height: 220px;
`

const PictureContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 160px;
  overflow: hidden;
  top: 0;
  left: 0;
  opacity: 0.99;

  > img {
    width: 100%;
    height: 160px;
  }
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
`

const PhotoContainer = styled.div`
  position: absolute;
  width: 120px;
  height: 120px;
  border-radius: 60px;
  border: 2px solid #edf0f5;
  overflow: hidden;
  bottom: 0;
  left: 16px;
  box-sizing: border-box;

  > img {
    width: 120px;
    height: 120px;
  }
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
`

const FormContainer = styled.div`
  @media (max-width: 1443px) {
    width: 100%;
    padding: 24px 16px 32px 16px;
    box-sizing: border-box;
  }
`

const NameHeader = styled.h3`
  margin: 0;
  color: #132540;
  font-family: 'HK Grotesk Medium';
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
`

const About = styled.div`
  font-family: 'HK Grotesk Medium';
  color: #949eb3;
  font-size: 15px;
  line-height: 22px;
`

const HeaderDivider = styled.div`
  border-top: 1px solid #edf0f5;
  height: 0;
  width: 100%;
  margin: 24px 0;
`

const FormData = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

const FormDataRow = styled.li`
  padding: 0;
  color: #132540;
  font-size: 15px;
  line-height: 22px;
  font-family: 'HK Grotesk Medium';

  :not(:last-child) {
    margin-bottom: 20px;
  }
`

const FormDataRowHeader = styled.h5`
  font-size: 11px;
  font-weight: 500;
  line-height: 13px;
  color: #949eb3;
  margin: 0 0 2px 0;
  text-transform: uppercase;
`

const AppsContainer = styled.div`
  padding: 12px 16px;
  border-radius: 8px;
  border: 1px solid #edf0f5;
  background: ${props => props.theme.colors.white};
  box-shadow: 0 4px 16px 0 rgba(83, 98, 124, 0.06);
  box-sizing: border-box;
  width: 100%;
`

export interface AppsHeaderProps {
  withApps: boolean
}

const AppsHeader = styled.h4<AppsHeaderProps>`
  margin: 0 0 0 ${props => (props.withApps ? '20px' : '12px')};
  font-size: 11px;
  font-weight: 500;
  line-height: 13px;
  font-family: 'HK Grotesk Medium';
  color: #132540;
`

export {
  MobileTopContainer,
  BackButton,
  TopContainerLabel,
  ImagesContainer,
  PictureContainer,
  PictureButton,
  PhotoContainer,
  PhotoButton,
  FormContainer,
  NameHeader,
  About,
  HeaderDivider,
  FormData,
  FormDataRow,
  FormDataRowHeader,
  AppsContainer,
  AppsHeader,
}
