import React from 'react'

import { Apps as AppsType } from '../../../types/apps'
import { App } from './components/App'
import { StyledAppsList } from './Styled'

export interface AppsListProps {
  apps: AppsType
}

const AppsList: React.FC<AppsListProps> = ({ apps, ...props }) => {
  return (
    <StyledAppsList {...props}>
      {apps.map(app => (
        <App key={app.id} {...app} />
      ))}
    </StyledAppsList>
  )
}

export default AppsList
