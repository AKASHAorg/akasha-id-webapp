import BasePopover from '@akashaproject/design-system/dist/components/Popover/BasePopover'
import '@trendmicro/react-popover/dist/react-popover.css'
import React, { useState } from 'react'

import { Apps as AppsType } from '../../../types/apps'
import { Persona as PersonaType } from '../../../types/users'
import { Persona } from './components/Persona'
import { Popover } from './components/Popover'
import { StyledPersonasList } from './Styled'

export interface PersonasListProps {
  apps: { [personaId: string]: AppsType }
  personas: PersonaType[]
  showApps: boolean
}

const PersonasList: React.FC<PersonasListProps> = ({ apps, personas, showApps, ...props }) => {
  const [showPopover, setPopoverVisibility] = useState(false)
  const [popoverTarget, setPopoverTarget] = useState<Element | null>(null)
  const [popoverId, setPopoverId] = useState('')

  const togglePopover = (id: string) => (e: Element | null) => {
    if (showPopover) {
      setPopoverVisibility(false)
      setPopoverTarget(null)
    } else {
      setPopoverVisibility(true)
      setPopoverTarget(e)
      setPopoverId(id)
    }
  }

  return (
    <>
      <StyledPersonasList {...props}>
        {personas.map(persona => (
          <Persona
            key={persona.id}
            id={persona.id}
            name={persona.personaName}
            about={persona.about}
            picture={persona.photo}
            apps={apps[persona.id]}
            togglePopover={togglePopover(persona.id)}
            showApps={showApps}
          />
        ))}
      </StyledPersonasList>

      <BasePopover target={popoverTarget} placement="top-left" show={showPopover}>
        <Popover id={popoverId} />
      </BasePopover>
    </>
  )
}

export default PersonasList
