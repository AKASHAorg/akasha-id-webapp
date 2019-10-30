import { CheckBox } from 'grommet'
import React from 'react'

import { App as AppType } from '../../../../../types/apps'
import { AppImage } from '../../../../shared/AppImage'
import { RowTextContainer } from '../../../../shared/RowTextContainer'
import { Row } from './Styled'

export interface AppProps extends AppType {
  id: string
}

const App: React.FC<AppProps> = ({ appInfo, id }) => {
  return (
    <Row>
      <AppImage icon={appInfo.icon} name={appInfo.name} />
      <RowTextContainer header={appInfo.name} subheader={appInfo.description} />
      <div>
        <CheckBox checked={true} toggle={true} />
      </div>
    </Row>
  )
}

export default App
