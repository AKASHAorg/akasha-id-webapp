import Button from '@akashaproject/design-system/dist/components/Button'
import React from 'react'
import styled from 'styled-components'

import { App as AppType } from '../../../../../types/apps'

export interface AppProps extends React.Props<any>, AppType {
  token: string
  onRemoveApp: (token: string) => void
}

const StyledRow = styled.li`
  width: calc(66px * 6 + 8px * 5);
  list-style: none;
  box-sizing: border-box;
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.shapes.borderRadius};
  padding: 8px;
  margin-top: 24px;
  margin-right: 24px;
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
      <p>{description}</p>
    </StyledRow>
  )
}

export default App
