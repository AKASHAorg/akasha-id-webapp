import React from 'react'
import { useTranslation } from 'react-i18next'

import { translation } from '../../../../../consts/i18n'
import * as routes from '../../../../../consts/routes'
import { Apps } from '../../../../../types/apps'
import {
  PersonaAppContainer,
  PersonaAppImageContainer,
  PersonaAppLabel,
  PersonaAvatarContainer,
  PersonaDivider,
  PersonaHeader,
  PersonaLink,
  PersonaMenuButton,
  PersonaRow,
  PersonaSubheader,
  PersonaTextContainer,
  PersonaTopContainer,
} from './Styled'

import menuIcon from './options.svg'

export interface PersonaProps {
  id: string
  name: string
  description: string
  avatar: string
  apps: Apps
  showApps: boolean
  togglePopover: (e: Element | null) => void
}

const Persona: React.FC<PersonaProps> = ({
  id,
  name,
  description,
  avatar,
  apps,
  togglePopover,
  showApps,
}) => {
  const { t } = useTranslation()

  return (
    <PersonaRow>
      <PersonaLink to={routes.personaDetails.replace(routes.personaIdParam, id)}>
        <PersonaTopContainer>
          <PersonaAvatarContainer src={avatar} alt={name} />

          <PersonaTextContainer>
            <PersonaHeader>{name}</PersonaHeader>
            <PersonaSubheader>{description}</PersonaSubheader>
          </PersonaTextContainer>

          <PersonaMenuButton
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              togglePopover(e.target as Element)
              e.preventDefault()
            }}
          >
            <img src={menuIcon} alt="Menu" />
          </PersonaMenuButton>
        </PersonaTopContainer>

        {showApps && (
          <>
            <PersonaDivider />

            {(!apps || apps.length === 0) && (
              <PersonaAppLabel>{t(translation.personasList.notUsed)}</PersonaAppLabel>
            )}

            {apps && apps.length > 0 && (
              <>
                <PersonaAppLabel>{t(translation.personasList.usedIn)}</PersonaAppLabel>
                <PersonaAppContainer>
                  {apps &&
                    apps.map(app => (
                      <PersonaAppImageContainer
                        key={app.id}
                        src={app.appInfo.icon}
                        alt={app.appInfo.name}
                      />
                    ))}
                </PersonaAppContainer>
              </>
            )}
          </>
        )}
      </PersonaLink>
    </PersonaRow>
  )
}

export default Persona
