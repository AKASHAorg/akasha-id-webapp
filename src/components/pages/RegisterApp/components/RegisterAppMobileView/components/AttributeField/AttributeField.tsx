import React from 'react'
import { useTranslation } from 'react-i18next'
import { WrappedFieldProps } from 'redux-form'

import { translation } from '../../../../../../../consts/i18n'
import { Toggle } from '../../../../../../shared/Toggle'
import { PersonaAttributesLabel, PersonaAttributesRow, PersonaAttributesText } from './Styled'

export interface AttributeFieldProps extends WrappedFieldProps {
  attribute: string
  attributeText: string
}

const AttributeField: React.FC<AttributeFieldProps> = ({ attribute, attributeText, input }) => {
  const { t } = useTranslation()

  return (
    <PersonaAttributesRow>
      <div>
        <PersonaAttributesLabel>
          {t((translation.attributes as any)[attribute])}
        </PersonaAttributesLabel>
        <PersonaAttributesText>
          {attributeText && attributeText.includes('data:image/') ? (
            <img src={attributeText} alt={t((translation.attributes as any)[attribute])} />
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
