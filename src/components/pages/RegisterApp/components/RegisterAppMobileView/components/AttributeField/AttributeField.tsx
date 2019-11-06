import React from 'react'
import { WrappedFieldProps } from 'redux-form'

import attributeNamesMap from '../../../../../../../consts/attribute-names-map'
import { Toggle } from '../../../../../../shared/Toggle'
import { PersonaAttributesLabel, PersonaAttributesRow, PersonaAttributesText } from './Styled'

export interface AttributeFieldProps extends WrappedFieldProps {
  attribute: string
  attributeText: string
}

const AttributeField: React.FC<AttributeFieldProps> = ({ attribute, attributeText, input }) => {
  return (
    <PersonaAttributesRow>
      <div>
        <PersonaAttributesLabel>{attributeNamesMap.get(attribute)}</PersonaAttributesLabel>
        <PersonaAttributesText>
          {attributeText && attributeText.includes('data:image/') ? (
            <img src={attributeText} alt={attributeNamesMap.get(attribute)} />
          ) : (
            attributeText
          )}
        </PersonaAttributesText>
      </div>

      <Toggle {...input} />
    </PersonaAttributesRow>
  )
}

export default AttributeField
