import { CheckBox } from 'grommet'
import React from 'react'

import { App as AppType } from '../../../../../types/apps'
import { AppImage } from '../../../../shared/AppImage'
import { RowTextContainer } from '../../../../shared/RowTextContainer'
import { Row } from './Styled'

export interface AppProps extends AppType {
  id: string
}

const App: React.FC<AppProps> = ({ id, icon, name, description }) => {
  return (
    <Row>
      <AppImage icon={icon} name={name} />
      <RowTextContainer header={name} subheader={description} />
      <div>
        <CheckBox checked={true} toggle={true} />
      </div>
    </Row>
  )
}

export default App
