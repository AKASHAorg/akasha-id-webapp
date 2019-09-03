import Button from '@akashaproject/design-system/dist/components/Button'
import React, { useEffect } from 'react'
import { App as AppType } from '../../../types/apps'
import { App } from './components/App'

export interface AppsProps {
  apps: { [token: string]: AppType }
  onAddApp: () => void
  loadApps: () => void
}

const Apps: React.FC<AppsProps> = ({ apps, onAddApp, loadApps }: AppsProps) => {
  useEffect(() => {
    loadApps()
  }, [loadApps])

  return (
    <>
      <Button onClick={onAddApp} buttonType="primary">
        Add app
      </Button>
      <ul>
        {Object.entries(apps).map(([token, app]: [string, AppType]) => (
          <App key={token} token={token} {...app} />
        ))}
      </ul>
    </>
  )
}

export default Apps
