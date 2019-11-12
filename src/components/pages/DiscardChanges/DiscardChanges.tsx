import React from 'react'

import { DiscardChangesModal } from '../../modals/DiscardChangesModal'

const DiscardChanges: React.FC<{}> = () => (
  <DiscardChangesModal isOpen={true} onDiscard={() => {}} onSave={() => {}} />
)

export default DiscardChanges
