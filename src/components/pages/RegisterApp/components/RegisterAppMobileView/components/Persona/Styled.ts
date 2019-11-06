import styled from 'styled-components'

import { borders, fonts } from '../../../../../../../styles'

export interface PersonaRowProps {
  selected: boolean
}

const PersonaRow = styled.div<PersonaRowProps>`
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

const PersonaNameContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 12px 16px;
`

const PersonaName = styled.h5`
  ${fonts.text}

  flex-grow: 1;
  margin: 0;
`

const PersonaDivider = styled.div`
  ${borders.dividerHorizontal('0', '16px')}
`

const PersonaAttributesHeader = styled.div`
  ${fonts.greyText}

  margin: 0 17px;
`

const PersonaAttributesList = styled.ul`
  margin: 24px 17px 17px 17px;
  list-style: none;
  padding: 0;
`

export {
  PersonaRow,
  PersonaNameContainer,
  PersonaName,
  PersonaDivider,
  PersonaAttributesHeader,
  PersonaAttributesList,
}
