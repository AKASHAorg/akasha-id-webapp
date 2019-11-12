import { RadioButton } from 'grommet'
import React from 'react'
import { WrappedFieldProps } from 'redux-form'

const PersonaField: React.FC<WrappedFieldProps> = ({ input }) => {
  return (
    <RadioButton
      onChange={input.onChange}
      value={input.value}
      checked={input.checked}
      name={input.name}
      type="checked"
    />
  )
}

export default PersonaField
