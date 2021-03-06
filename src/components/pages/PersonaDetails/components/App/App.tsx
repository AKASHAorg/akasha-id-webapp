import React from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'

import * as routes from '../../../../../consts/routes'
import { App as AppType } from '../../../../../types/apps'
import { AppImage } from '../../../../shared/AppImage'
import { RowTextContainer } from '../../../../shared/RowTextContainer'
import { Toggle } from '../../../../shared/Toggle'
import { Row } from './Styled'

export interface AppProps extends AppType, RouteComponentProps<any> {
  id: string
}

const App: React.FC<AppProps> = ({ appInfo, id, history }) => {
  return (
    <Row>
      <AppImage icon={appInfo.icon} name={appInfo.name} />
      <RowTextContainer header={appInfo.name} subheader={appInfo.description} />
      <div>
        <Toggle
          checked={true}
          onBlur={() => {}}
          onFocus={() => {}}
          onChange={() => {
            history.push(routes.unlinkPersona.replace(routes.tokenParam, id))
          }}
        />
      </div>
    </Row>
  )
}

export default withRouter(App)
