import React from 'react'
import { useTranslation } from 'react-i18next'

import { translation } from '../../../../../consts/i18n'
import * as routes from '../../../../../consts/routes'
import { App as AppType } from '../../../../../types/apps'
import { AppImage } from '../../../AppImage'
import { RowTextContainer } from '../../../RowTextContainer'
import { StyledDate, StyledDescription, StyledLink, StyledRow, StyledStatus } from './StyledApp'

export interface AppProps extends React.Props<any>, AppType {}

const App: React.FC<AppProps> = ({ id, appInfo }) => {
  const { t } = useTranslation()

  return (
    <StyledRow>
      <StyledLink to={routes.appDetails.replace(routes.tokenParam, id)}>
        <AppImage icon={appInfo.icon} name={appInfo.name} />
        <RowTextContainer
          header={appInfo.name}
          subheader={
            <>
              <StyledStatus>{t(translation.appStatus.active)}</StyledStatus>
              <StyledDate>
                {t(translation.appsList.requested, { requestDate: '20 July 2019' })}
              </StyledDate>
              <StyledDescription>{appInfo.description}</StyledDescription>
            </>
          }
        />
      </StyledLink>
    </StyledRow>
  )
}

export default App
