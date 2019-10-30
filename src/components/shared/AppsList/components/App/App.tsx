import React from 'react'

import * as routes from '../../../../../consts/routes'
import { App as AppType } from '../../../../../types/apps'
import { AppImage } from '../../../AppImage'
import { RowTextContainer } from '../../../RowTextContainer'
import { StyledDate, StyledDescription, StyledLink, StyledRow, StyledStatus } from './StyledApp'

export interface AppProps extends React.Props<any>, AppType {}

const App: React.FC<AppProps> = ({ id, appInfo }) => {
  return (
    <StyledRow>
      <StyledLink to={routes.appDetails.replace(routes.tokenParam, id)}>
        <AppImage icon={appInfo.icon} name={appInfo.name} />
        <RowTextContainer
          header={appInfo.name}
          subheader={
            <>
              <StyledStatus>Active</StyledStatus>
              <StyledDate>Persona requested on 20 July 2019</StyledDate>
              <StyledDescription>{appInfo.description}</StyledDescription>
            </>
          }
        />
      </StyledLink>
    </StyledRow>
  )
}

export default App
