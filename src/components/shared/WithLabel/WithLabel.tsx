import React from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'

import { fonts } from '../../../styles'

interface WithLabelProps {
  label: string
  error: string
}

const Label = styled.div`
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const LabelText = styled.span`
  ${fonts.textLabel}
`

const ErrorText = styled.span`
  color: ${props => props.theme.colors.red};
  font-size: 10px;
  line-height: 12px;
  letter-spacing: 0.12px;
`

const WithLabel: React.FC<React.PropsWithChildren<WithLabelProps>> = ({
  label,
  error,
  children,
}) => {
  const { t } = useTranslation()

  return (
    <div>
      <Label>
        <LabelText>{label}</LabelText>
        <ErrorText>{error && t(error)}</ErrorText>
      </Label>
      <div>{children}</div>
    </div>
  )
}

export default WithLabel
