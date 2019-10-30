import React, { useEffect } from 'react'

import { PersonaCreatedModal } from '../../modals/PersonaCreatedModal'

export interface PersonaCreatedProps {
  unsetRedirect: () => void
}

const PersonaCreated: React.FC<PersonaCreatedProps> = ({ unsetRedirect }) => {
  useEffect(() => {
    unsetRedirect()
  }, [unsetRedirect])

  return <PersonaCreatedModal />
}

export default PersonaCreated
