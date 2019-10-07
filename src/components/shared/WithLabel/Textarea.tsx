import React, { TextareaHTMLAttributes } from 'react'
import { WrappedFieldProps } from 'redux-form'
import styled from 'styled-components'

import WithLabel from './WithLabel'

export interface TextareaWithLabelProps extends WrappedFieldProps, TextareaHTMLAttributes<any> {
  label: string
  placeholder: string
}

const StyledTextarea = styled.textarea`
  width: 100%;
  border: 1px solid ${props => props.theme.colors.lightGrey};
  border-radius: ${props => props.theme.shapes.borderRadius};
  background: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.dark};
  padding: 16px;
  box-sizing: border-box;
  resize: none;
`

const TextareaWithLabel = ({
  label,
  placeholder,
  input,
  meta: { touched, error },
  ...props
}: TextareaWithLabelProps) => (
  <WithLabel label={label} error={touched ? error : ''}>
    <StyledTextarea {...input} placeholder={placeholder} {...props} />
  </WithLabel>
)

export default TextareaWithLabel
