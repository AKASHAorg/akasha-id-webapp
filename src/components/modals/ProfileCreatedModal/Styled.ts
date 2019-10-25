import { Link, LinkProps } from 'react-router-dom'
import styled from 'styled-components'

import { fonts } from '../../../styles'

const ModalContent = styled.div`
  padding-top: 64px;
  padding-bottom: 64px;
  box-sizing: border-box;
  width: calc(100vw - 32px);
  height: calc(100vh - 32px);
  max-width: 343px;
  max-height: 598px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
`

const Logo = styled.div`
  width: 244px;
  height: 244px;
  background: ${props => props.theme.colors.grey};
  margin-bottom: 32px;
`

const Header = styled.h1`
  ${fonts.textHeader}

  margin-top: 0px;
  margin-bottom: 4px;
  text-align: center;
`

const PaleText = styled.p`
  ${fonts.greyTextBig}

  margin: 0 0 32px 0;
  text-align: center;
  width: 270px;
`

const ProfilesLink = styled(Link)<LinkProps>`
  ${fonts.blueText};

  margin-top: 24px;

  :visited,
  :hover {
    color: #4e71ff;
  }
`

export { ModalContent, Logo, Header, PaleText, ProfilesLink }
