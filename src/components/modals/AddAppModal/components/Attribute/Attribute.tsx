import Checkbox from '@akashaproject/design-system/dist/components/Checkbox'
import React from 'react'
import { WrappedFieldProps } from 'redux-form'

import { StyledAttribute } from './StyledAttribute'

export interface AttributeProps extends WrappedFieldProps {
  label: string
}

const Attribute: React.FC<AttributeProps> = ({ label, input, meta }) => {
  return (
    <StyledAttribute>
      <Checkbox label={label} checked={input.checked} name={input.name} onChange={input.onChange} />
    </StyledAttribute>
  )
}

export default Attribute
