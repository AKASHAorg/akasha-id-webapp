import Button from '@akashaproject/design-system/dist/components/Button'
import React from 'react'
import styled from 'styled-components'

export interface AppProps extends React.Props<any> {
  token: string
  name: string
  description: string
  icon: string
  url: string
  onRemoveApp: (token: string) => void
}

const StyledRow = styled.li`
  list-style: none;

  :not(:first-child) {
    border-top: 1px solid ${props => props.theme.colors.border};
    padding: 8px;
  }
`

const StyledButton = styled(Button)`
  margin-left: 24px;
`

const App: React.FC<AppProps> = ({
  token,
  name,
  description,
  icon,
  url,
  onRemoveApp,
}: AppProps) => {
  return (
    <StyledRow>
      <h3>
        <a href={url}>
          <img src={icon} alt={name} />
        </a>
        {name}
        <StyledButton onClick={() => onRemoveApp(token)} small={true} buttonType="alert">
          Delete app
        </StyledButton>
      </h3>
      <p>Token: {token}</p>
      <p>{description}</p>
    </StyledRow>
  )
}

export default App
