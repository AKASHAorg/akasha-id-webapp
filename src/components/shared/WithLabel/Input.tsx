import Input from '@akashaproject/design-system/dist/components/Input'
import React from 'react'
import { WrappedFieldProps } from 'redux-form'

import WithLabel from './WithLabel'

export interface InputWithLabelProps extends WrappedFieldProps {
  label: string
  placeholder: string
  type: string
}

const InputWithLabel = ({
  label,
  placeholder,
  input,
  type,
  meta: { touched, error },
}: InputWithLabelProps) => (
  <WithLabel label={label} error={error}>
    <Input {...input} type={type} placeholder={placeholder} />
  </WithLabel>
)

export default InputWithLabel
