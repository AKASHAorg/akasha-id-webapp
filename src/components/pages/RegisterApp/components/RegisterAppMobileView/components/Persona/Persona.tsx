import React from 'react'
import { Field } from 'redux-form'

import { Persona as PersonaType } from '../../../../../../../types/users'
import { AttributeField } from '../AttributeField'
import { PersonaField } from '../PersonaField'
import {
  PersonaAttributesHeader,
  PersonaAttributesList,
  PersonaDivider,
  PersonaName,
  PersonaNameContainer,
  PersonaRow,
} from './Styled'

export interface PersonaProps extends PersonaType {
  appName: string
  appAttributes: string[]
  selected: boolean
}

const Persona: React.FC<PersonaProps> = ({
  selected,
  personaName,
  id,
  appName,
  appAttributes,
  ...props
}) => {
  return (
    <PersonaRow selected={selected}>
      <PersonaNameContainer>
        <PersonaName>{personaName}</PersonaName>
        <Field name="personaId" value={id} component={PersonaField} type="radio" />
      </PersonaNameContainer>

      {selected && (
        <>
          <PersonaDivider />

          <PersonaAttributesHeader>
            {appName} requests access to the following attributes:
          </PersonaAttributesHeader>

          <PersonaAttributesList>
            {appAttributes.map(attribute => {
              const attributeText = (props as any)[attribute]

              return (
                <Field
                  key={attribute}
                  name={`attributes.${attribute}`}
                  attribute={attribute}
                  attributeText={attributeText}
                  component={AttributeField}
                  type="checkbox"
                />
              )
            })}
          </PersonaAttributesList>
        </>
      )}
    </PersonaRow>
  )
}

export default Persona
