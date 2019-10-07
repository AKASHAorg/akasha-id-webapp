import React from 'react'
import styled from 'styled-components'

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
  text-transform: uppercase;
  color: ${props => props.theme.colors.darkGrey};
  font-size: 10px;
  line-height: 12px;
  letter-spacing: 0.12px;
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
  return (
    <div>
      <Label>
        <LabelText>{label}</LabelText>
        <ErrorText>{error}</ErrorText>
      </Label>
      <div>{children}</div>
    </div>
  )
}

export default WithLabel
