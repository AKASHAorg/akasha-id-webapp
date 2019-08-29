import React from 'react'
import styled from 'styled-components'

interface WithLabelProps {
  label: string
  error: string
}

const Label = styled.div`
  margin-top: 8px;
  margin-bottom: 8px;
`

const LabelRow = styled.div`
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const LabelText = styled.span`
  text-transform: uppercase;
  color: ${props => props.theme.colors.darkGrey};
`

const ErrorText = styled.span`
  color: ${props => props.theme.colors.red};
`

const WithLabel: React.FC<React.PropsWithChildren<WithLabelProps>> = ({
  label,
  error,
  children,
}) => {
  return (
    <Label>
      <LabelRow>
        <LabelText>{label}</LabelText>
        <ErrorText>{error}</ErrorText>
      </LabelRow>
      <div>{children}</div>
    </Label>
  )
}

export default WithLabel
