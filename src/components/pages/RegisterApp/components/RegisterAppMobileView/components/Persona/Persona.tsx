import Checkbox from '@akashaproject/design-system/dist/components/Checkbox'
import { RadioButton } from 'grommet'
import React from 'react'

import attributeNamesMap from '../../../../../../../consts/attribute-names-map'
import { Persona as PersonaType } from '../../../../../../../types/users'
import {
  PersonaAttributesHeader,
  PersonaAttributesLabel,
  PersonaAttributesList,
  PersonaAttributesRow,
  PersonaAttributesText,
  PersonaDivider,
  PersonaName,
  PersonaNameContainer,
  PersonaRow,
} from './Styled'

export interface PersonaProps extends PersonaType {
  appName: string
  appAttributes: string[]
  attributesState: { [x: string]: boolean }
  selected: boolean
  toggleAttribute: (attribute: string) => void
  togglePersona: (personaId: string) => void
}

const Persona: React.FC<PersonaProps> = ({
  selected,
  personaName,
  id,
  appName,
  appAttributes,
  attributesState,
  toggleAttribute,
  togglePersona,
  ...props
}) => {
  return (
    <PersonaRow selected={selected}>
      <PersonaNameContainer>
        <PersonaName>{personaName}</PersonaName>
        <RadioButton
          name="persona"
          value={id}
          checked={selected}
          onChange={() => togglePersona(id)}
        />
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
                <PersonaAttributesRow key={attribute}>
                  <div>
                    <PersonaAttributesLabel>
                      {attributeNamesMap.get(attribute)}
                    </PersonaAttributesLabel>
                    <PersonaAttributesText>
                      {attributeText && attributeText.includes('data:image/') ? (
                        <img src={attributeText} alt={attributeNamesMap.get(attribute)} />
                      ) : (
                        attributeText
                      )}
                    </PersonaAttributesText>
                  </div>

                  <Checkbox
                    name={attribute}
                    checked={attributesState[attribute]}
                    onChange={() => toggleAttribute(attribute)}
                  />
                </PersonaAttributesRow>
              )
            })}
          </PersonaAttributesList>
        </>
      )}
    </PersonaRow>
  )
}

export default Persona
