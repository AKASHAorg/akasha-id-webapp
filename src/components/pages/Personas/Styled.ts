import styled, { css } from 'styled-components'

import { fonts, screen } from '../../../styles'
import { PersonasList } from '../../shared/PersonasList'

const PersonasHeader = styled.h3`
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

const MobilePersonasHeaderContainer = styled.div`
  ${screen.onlyMobile}

  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const MobilePersonasHeader = styled.h3`
  ${fonts.textHeader}

  margin: 0;
`

const NoPersonasContainer = styled.div`
  ${screen.onlyMobile}

  margin-top: 88px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const NoPersonasLogo = styled.div`
  width: 224px;
  height: 198px;
  background: #d8d8d8;
  opacity: 0.99;
`

const NoPersonasHeader = styled.h3`
  ${fonts.textBold}

  margin-top: 24px;
  margin-bottom: 2px;
`

const NoPersonasSubheader = styled.div`
  ${fonts.greyText}

  width: 284px;
  text-align: center;
`

const StyledPersonasList = styled(PersonasList)`
  margin: 20px 0 0 0;
`

export {
  PersonasHeader,
  PageContainer,
  MobilePersonasHeaderContainer,
  MobilePersonasHeader,
  NoPersonasContainer,
  NoPersonasLogo,
  NoPersonasHeader,
  NoPersonasSubheader,
  StyledPersonasList,
}
