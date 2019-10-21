import React from 'react'

import * as routes from '../../../../../consts/routes'
import { App as AppType } from '../../../../../types/apps'
import { AppImage } from '../../../AppImage'
import { RowTextContainer } from '../../../RowTextContainer'
import { StyledDate, StyledDescription, StyledLink, StyledRow, StyledStatus } from './StyledApp'

export interface AppProps extends React.Props<any>, AppType {
  token: string
}

const App: React.FC<AppProps> = ({ token, name, description, icon }: AppProps) => {
  return (
    <StyledRow>
      <StyledLink to={routes.appDetails.replace(routes.tokenParam, token)}>
        <AppImage icon={icon} name={name} />
        <RowTextContainer
          header={name}
          subheader={
            <>
              <StyledStatus>Active</StyledStatus>
              <StyledDate>Profile requested on 20 July 2019</StyledDate>
              <StyledDescription>{description}</StyledDescription>
            </>
          }
        />
      </StyledLink>
    </StyledRow>
  )
}

export default App
