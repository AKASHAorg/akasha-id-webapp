import Button from '@akashaproject/design-system/dist/components/Button'
import Icon from '@akashaproject/design-system/dist/components/Icon'
import AkashaThemeContext from '@akashaproject/design-system/dist/providers/ThemeProvider'
import React, { useContext, useEffect } from 'react'
import { InjectedFormProps } from 'redux-form'

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
  selectedPersona: string | null
  personas: PersonaType[]
  loadPersonas: () => void
  onClose: () => void
}

const RegisterAppMobileView: React.FC<
  RegisterAppMobileViewProps & InjectedFormProps<AddAppFormData, RegisterAppMobileViewProps, string>
> = ({
  name,
  icon,
  description,
  nonce,
  attributes,
  selectedPersona,
  personas,
  loadPersonas,
  handleSubmit,
}) => {
  const theme = useContext(AkashaThemeContext)

  useEffect(() => {
    loadPersonas()
  }, [loadPersonas])

  return (
    <StyledPageContainer>
      <form onSubmit={handleSubmit}>
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
          <Button fullWidth={true} buttonType="primary" onClick={handleSubmit}>
            Authorize
          </Button>
        </MobileBottomContainer>
      </form>
    </StyledPageContainer>
  )
}

export default RegisterAppMobileView
