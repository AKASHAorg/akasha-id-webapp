import { Link, LinkProps } from 'react-router-dom'
import styled from 'styled-components'

import { borders, fonts } from '../../../../../styles'

const PersonaRow = styled.li`
  ${borders.whiteBlock('0', true)}

  width: 100%;

  :not(:last-child) {
    margin-bottom: 8px;
  }
`

const PersonaLink = styled(Link)<LinkProps>`
  padding: 12px 16px;
  width: 100%;
  box-sizing: border-box;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
`

const PersonaTopContainer = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: flex-start;
`

const PersonaAvatarContainer = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  border: 1px solid #edf0f5;
  box-sizing: border-box;
`

const PersonaTextContainer = styled.div`
  margin-left: 12px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`

const PersonaHeader = styled.h4`
  ${fonts.textBold}

  margin: 0;
`

const PersonaSubheader = styled.div`
  ${fonts.greyText}

  margin: 0;
`

const PersonaMenuButton = styled.button`
  border: none;
  background: transparent;
  width: 20px;
  height: 20px;
  padding: 0;
  outline: none;
`

const PersonaDivider = styled.div`
  ${borders.dividerHorizontal('12px', '10px')}
`

const PersonaAppLabel = styled.div`
  ${fonts.textLabel}
`

const PersonaAppContainer = styled.div`
  margin-top: 8px;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
`

const PersonaAppImageContainer = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 3.5px;
  margin-right: 12px;
`

export {
  PersonaRow,
  PersonaLink,
  PersonaTopContainer,
  PersonaAvatarContainer,
  PersonaTextContainer,
  PersonaHeader,
  PersonaSubheader,
  PersonaMenuButton,
  PersonaDivider,
  PersonaAppLabel,
  PersonaAppContainer,
  PersonaAppImageContainer,
}
