import React from 'react'

import { Apps as AppsType } from '../../../types/apps'
import { App } from './components/App'
import { StyledAppsList } from './Styled'

export interface AppsListProps {
  apps: AppsType
}

const AppsList: React.FC<AppsListProps> = ({ apps }) => {
  return (
    <StyledAppsList>
      {Object.entries(apps).map(([token, app]) => (
        <App key={token} token={token} {...app} />
      ))}
    </StyledAppsList>
  )
}

export default AppsList
