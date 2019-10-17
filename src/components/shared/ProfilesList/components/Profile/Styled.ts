import { Link, LinkProps } from 'react-router-dom'
import styled from 'styled-components'

const ProfileRow = styled.li`
  background: ${props => props.theme.colors.white};
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #edf0f5;
  border-radius: 8px;
  box-shadow: 0 4px 16px 0 rgba(83, 98, 124, 0.06);

  :not(:last-child) {
    margin-bottom: 8px;
  }
`

const ProfileLink = styled(Link)<LinkProps>`
  padding: 12px 16px;
  width: 100%;
  box-sizing: border-box;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
`

const ProfileTopContainer = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: flex-start;
`

const ProfileImageContainer = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  border: 1px solid #edf0f5;
  box-sizing: border-box;

  > img {
    width: 40px;
    height: 40px;
  }
`

const ProfileTextContainer = styled.div`
  margin-left: 12px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`

const ProfileHeader = styled.h4`
  margin: 0;
  font-family: 'HK Grotesk Medium';
  font-size: 15px;
  font-weight: 600;
  line-height: 22px;
  color: #132540;
`

const ProfileSubheader = styled.div`
  margin: 0;
  font-family: 'HK Grotesk Medium';
  font-size: 13px;
  font-weight: 500;
  line-height: 18px;
  color: #949eb3;
`

const ProfileMenuButton = styled.button`
  border: none;
  background: transparent;
  width: 20px;
  height: 20px;
  padding: 0;
  outline: none;
`

const ProfileDivider = styled.div`
  flex-grow: 1;
  border-top: 1px solid #edf0f5;
  width: 100%;
  margin-top: 12px;
  margin-bottom: 10px;
`

const ProfileAppLabel = styled.div`
  font-size: 11px;
  font-weight: 500;
  line-height: 13px;
  color: #132540;
  font-family: 'HK Grotesk Medium';
  text-transform: uppercase;
`

const ProfileAppContainer = styled.div`
  margin-top: 8px;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
`

const ProfileAppImageContainer = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 3.5px;
  margin-right: 12px;

  > img {
    width: 28px;
    height: 28px;
  }
`

export {
  ProfileRow,
  ProfileLink,
  ProfileTopContainer,
  ProfileImageContainer,
  ProfileTextContainer,
  ProfileHeader,
  ProfileSubheader,
  ProfileMenuButton,
  ProfileDivider,
  ProfileAppLabel,
  ProfileAppContainer,
  ProfileAppImageContainer,
}
