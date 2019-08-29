import Button from '@akashaproject/design-system/dist/components/Button'
import React from 'react'
import { App } from './components/App'
import { AppProps } from './components/App/App'

type AppPropsWithoutDispatch = Omit<AppProps, 'onRemoveApp'>
export interface AppsProps {
  apps: AppPropsWithoutDispatch[]
  onAddApp: () => void
}

const Apps: React.FC<AppsProps> = ({ apps, onAddApp }: AppsProps) => {
  return (
    <>
      <Button onClick={onAddApp} buttonType="primary">
        Add app
      </Button>
      <ul>
        {apps.map(app => (
          <App key={app.token} {...app} />
        ))}
      </ul>
    </>
  )
}

export default Apps
