import React, { ChangeEvent, FocusEvent } from 'react'

import { EventOrValueHandler } from 'redux-form'
import { ToggleBackground, ToggleCircle } from './Styled'

export interface ToggleProps {
  checked?: boolean
  onChange: (() => void) | EventOrValueHandler<ChangeEvent<any>>
  onFocus: (() => void) | EventOrValueHandler<FocusEvent<any>>
  onBlur: (() => void) | EventOrValueHandler<FocusEvent<any>>
}

const Toggle: React.FC<ToggleProps> = ({ checked, onChange, onFocus, onBlur }) => {
  let inputRef: HTMLInputElement | null = null

  return (
    <ToggleBackground
      checked={checked}
      onClick={() => {
        if (inputRef) {
          inputRef.click()
        }
      }}
      onFocus={onFocus}
      onBlur={onBlur}
    >
      <ToggleCircle checked={checked} />

      <input
        ref={ref => {
          inputRef = ref
        }}
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
    </ToggleBackground>
  )
}

export default Toggle
