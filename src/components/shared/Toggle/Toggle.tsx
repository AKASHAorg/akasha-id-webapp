import React from 'react'

import { ToggleBackground, ToggleCircle } from './Styled'

export interface ToggleProps {
  checked?: boolean
  onChange: () => void
  onFocus: () => void
  onBlur: () => void
}

const Toggle: React.FC<ToggleProps> = ({ checked, onChange, onFocus, onBlur }) => {
  return (
    <ToggleBackground checked={checked} onClick={onChange} onFocus={onFocus} onBlur={onBlur}>
      <ToggleCircle checked={checked} />

      <input type="checkbox" checked={checked} />
    </ToggleBackground>
  )
}

export default Toggle
