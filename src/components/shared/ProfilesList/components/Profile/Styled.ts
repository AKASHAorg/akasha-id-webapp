import { Link, LinkProps } from 'react-router-dom'
import styled from 'styled-components'

import { borders, fonts } from '../../../../../styles'

const ProfileRow = styled.li`
  ${borders.whiteBlock('0', true)}

  width: 100%;

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
  ${fonts.textBold}

  margin: 0;
`

const ProfileSubheader = styled.div`
  ${fonts.greyText}

  margin: 0;
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
  ${borders.dividerHorizontal('12px', '10px')}
`

const ProfileAppLabel = styled.div`
  ${fonts.textLabel}
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
