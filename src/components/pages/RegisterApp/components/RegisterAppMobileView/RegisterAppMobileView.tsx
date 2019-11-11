import Button from '@akashaproject/design-system/dist/components/Button'
import React, { useEffect } from 'react'
import { Trans, useTranslation } from 'react-i18next'
import { InjectedFormProps } from 'redux-form'

import { registerApp } from '../../../../../consts/i18n'
import { REGISTER_APP } from '../../../../../consts/i18n-ns'
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

import addIcon from './add__active.png'

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
  useEffect(() => {
    loadPersonas()
  }, [loadPersonas])

  const { t } = useTranslation(REGISTER_APP)

  return (
    <StyledPageContainer>
      <form onSubmit={handleSubmit}>
        <MobileTopBarWithLabelCancelButton>
          {t(registerApp.pageTitle)}
        </MobileTopBarWithLabelCancelButton>

        <TopText>{t(registerApp.text, { appName: name })}</TopText>

        <AppContainer>
          <AppHeader>
            <AppImage icon={icon} name={name} />
            <RowTextContainer header={name} subheader={description} />
          </AppHeader>
          <AppDivider />
          <AppWarning>
            <Trans i18nKey={registerApp.warning} values={{ nonce, appName: name }}>
              Please ensure {name} displays the same security code: <AppNonce>{nonce}</AppNonce>
            </Trans>
          </AppWarning>
        </AppContainer>

        <PersonasContainer>
          <PersonasHeader>{t(registerApp.selectPersona)}</PersonasHeader>
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
            <img src={addIcon} alt="New Persona" />
            {t(registerApp.newPersona)}
          </AddPersonaLink>
        </PersonasContainer>

        <MobileBottomContainer>
          <Button fullWidth={true} buttonType="primary" onClick={handleSubmit}>
            {t(registerApp.authorize)}
          </Button>
        </MobileBottomContainer>
      </form>
    </StyledPageContainer>
  )
}

export default RegisterAppMobileView
