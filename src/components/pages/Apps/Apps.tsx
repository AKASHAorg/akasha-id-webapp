import Button from '@akashaproject/design-system/dist/components/Button'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import { Redirect } from 'react-router'
import { appRequestLinkParam, registerApp, walletUrl } from '../../../consts/routes'
import { client } from '../../../did'
import { App as AppType } from '../../../types/apps'
import { Column } from '../shared/Container'
import { Sidebar } from '../shared/Sidebar'
import { SidebarContainer } from '../shared/SidebarContainer'
import { App } from './components/App'

export interface AppsProps {
  apps: { [token: string]: AppType }
  loadApps: () => void
}

const StyledList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: row;
  display: flex;
  flex-wrap: wrap;
`

const Apps: React.FC<AppsProps> = ({ apps, loadApps }) => {
  useEffect(() => {
    loadApps()
  }, [loadApps])
  const [redirectToAddApp, setRedirectToAddApp] = useState(false)
  const [registerAppLink, setRegisterAppLink] = useState()

  return (
    <SidebarContainer sidebar={<Sidebar />}>
      {redirectToAddApp && (
        <>
          <Redirect
            to={registerApp.replace(appRequestLinkParam, encodeURIComponent(registerAppLink))}
          />
        </>
      )}

      <Column size={14}>
        <Button
          onClick={async () => {
            const link: string = await client.registrationLink()
            const trimmedLink = link.substr(walletUrl.length)

            setRegisterAppLink(trimmedLink)
            setRedirectToAddApp(true)
          }}
          buttonType="primary"
        >
          Add app
        </Button>
        <StyledList>
          {Object.entries(apps).map(([token, app]: [string, AppType]) => (
            <App key={token} token={token} {...app} />
          ))}
        </StyledList>
      </Column>
    </SidebarContainer>
  )
}

export default Apps
