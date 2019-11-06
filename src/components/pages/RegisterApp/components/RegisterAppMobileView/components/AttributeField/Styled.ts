import styled from 'styled-components'

import { fonts } from '../../../../../../../styles'

const PersonaAttributesRow = styled.li`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin: 0;
  padding: 0;

  :not(:first-child) {
    border-top: 1px solid #edf0f5;
    padding-top: 16px;
  }

  :not(:last-child) {
    padding-bottom: 16px;
  }
`

const PersonaAttributesLabel = styled.h5`
  ${fonts.greyTextLabel}

  margin: 0 0 2px 0;
`

const PersonaAttributesText = styled.div`
  ${fonts.text}

  word-break: break-all;

  > img {
    max-width: 100%;
  }
`

export { PersonaAttributesRow, PersonaAttributesLabel, PersonaAttributesText }
