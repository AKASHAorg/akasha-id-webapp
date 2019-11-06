import Icon from '@akashaproject/design-system/dist/components/Icon'
import React from 'react'

import * as routes from '../../../../../consts/routes'
import { Apps } from '../../../../../types/apps'
import {
  PersonaAppContainer,
  PersonaAppImageContainer,
  PersonaAppLabel,
  PersonaDivider,
  PersonaHeader,
  PersonaImageContainer,
  PersonaLink,
  PersonaMenuButton,
  PersonaRow,
  PersonaSubheader,
  PersonaTextContainer,
  PersonaTopContainer,
} from './Styled'

export interface PersonaProps {
  id: string
  name: string
  about: string
  picture: string
  apps: Apps
  showApps: boolean
  togglePopover: (e: Element | null) => void
}

const Persona: React.FC<PersonaProps> = ({
  id,
  name,
  about,
  picture,
  apps,
  togglePopover,
  showApps,
}) => {
  return (
    <PersonaRow>
      <PersonaLink to={routes.personaDetails.replace(routes.personaIdParam, id)}>
        <PersonaTopContainer>
          <PersonaImageContainer src={picture} alt={name} />

          <PersonaTextContainer>
            <PersonaHeader>{name}</PersonaHeader>
            <PersonaSubheader>{about}</PersonaSubheader>
          </PersonaTextContainer>

          <PersonaMenuButton
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              togglePopover(e.target as Element)
              e.preventDefault()
            }}
          >
            <Icon type="more" width="20px" height="20px" color="#132540" />
          </PersonaMenuButton>
        </PersonaTopContainer>

        {showApps && (
          <>
            <PersonaDivider />

            <PersonaAppLabel>Used in</PersonaAppLabel>
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
      </PersonaLink>
    </PersonaRow>
  )
}

export default Persona
