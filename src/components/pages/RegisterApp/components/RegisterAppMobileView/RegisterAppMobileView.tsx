import Button from '@akashaproject/design-system/dist/components/Button'
import Icon from '@akashaproject/design-system/dist/components/Icon'
import AkashaThemeContext from '@akashaproject/design-system/dist/providers/ThemeProvider'
import React, { useContext, useEffect, useState } from 'react'

import * as routes from '../../../../../consts/routes'
import { AddAppFormData, AddAppModalStep } from '../../../../../types/apps'
import { Persona as PersonaType } from '../../../../../types/users'
import { AppImage } from '../../../../shared/AppImage'
import { MobileTopBarWithLabelCancelButton } from '../../../../shared/MobileTopBarWithLabelCancelButton'
import { RowTextContainer } from '../../../../shared/RowTextContainer'
import { Persona } from './components/Persona'
import {
  AddPersonaLink,
  AppContainer,
  AppDivider,
  AppHeader,
  AppNonce,
  AppWarning,
  MobileBottomContainer,
  PersonasContainer,
  PersonasHeader,
  PersonasList,
  StyledPageContainer,
  TopText,
} from './Styled'

export interface RegisterAppMobileViewProps {
  step: AddAppModalStep
  name: string
  description: string
  icon: string
  url: string
  nonce: number
  attributes: string[]
  personas: PersonaType[]
  loadPersonas: () => void
  onClose: () => void
  onOk: (personaId: string, formData: AddAppFormData) => void
}

const RegisterAppMobileView: React.FC<RegisterAppMobileViewProps> = ({
  name,
  icon,
  description,
  nonce,
  attributes,
  personas,
  loadPersonas,
  onOk,
}) => {
  const theme = useContext(AkashaThemeContext)

  useEffect(() => {
    loadPersonas()
  }, [loadPersonas])

  const [selectedPersona, togglePersona] = useState<null | string>(null)

  const initialAttributesState = Object.fromEntries(attributes.map(attribute => [attribute, false]))

  console.log(initialAttributesState)
  const [attributesState, changeAttributesState] = useState(initialAttributesState)

  const toggleAttribute = (attribute: string) => {
    changeAttributesState({
      ...attributesState,
      [attribute]: !attributesState[attribute],
    })
    console.log(attributesState)
  }

  return (
    <StyledPageContainer>
      <MobileTopBarWithLabelCancelButton>New Application</MobileTopBarWithLabelCancelButton>

      <TopText>{name} requested access to your persona information:</TopText>

      <AppContainer>
        <AppHeader>
          <AppImage icon={icon} name={name} />
          <RowTextContainer header={name} subheader={description} />
        </AppHeader>
        <AppDivider />
        <AppWarning>
          Please ensure {name} displays the same security code: <AppNonce>{nonce}</AppNonce>
        </AppWarning>
      </AppContainer>

      <PersonasContainer>
        <PersonasHeader>Select persona</PersonasHeader>
        <PersonasList>
          {personas.map(persona => (
            <Persona
              appName={name}
              appAttributes={attributes}
              selected={selectedPersona === persona.id}
              key={persona.id}
              attributesState={attributesState}
              toggleAttribute={toggleAttribute}
              togglePersona={togglePersona}
              {...persona}
            />
          ))}
        </PersonasList>

        <AddPersonaLink to={routes.createPersona}>
          <Icon type="plus" color={theme.colors.blue} width="13px" height="13px" />
          New Persona
        </AddPersonaLink>
      </PersonasContainer>

      <MobileBottomContainer>
        <Button
          fullWidth={true}
          buttonType="primary"
          onClick={() => {
            onOk(selectedPersona!, attributesState as AddAppFormData)
          }}
        >
          Authorize
        </Button>
      </MobileBottomContainer>
    </StyledPageContainer>
  )
}

export default RegisterAppMobileView
