import React from 'react'
import { App } from './components/App'
import { AppProps } from './components/App/App'

type AppPropsWithoutDispatch = Omit<AppProps, 'onRemoveApp'>
export interface AppsProps {
  apps: AppPropsWithoutDispatch[]
}

const Apps: React.FC<AppsProps> = ({ apps }: AppsProps) => {
  return (
    <>
      <ul>
        {apps.map(app => (
          <App key={app.id} {...app} />
        ))}
      </ul>
    </>
  )
}

export default Apps
