import React from 'react'

import * as routes from '../../../consts/routes'
import { BottomHeader, PageLink } from './Styled'

const MobileBottomBar: React.FC<{}> = () => {
  return (
    <BottomHeader>
      <PageLink to={routes.profiles}>
        <div />
        <h4>My Personas</h4>
      </PageLink>

      <PageLink to={routes.apps}>
        <div />
        <h4>Applications</h4>
      </PageLink>
    </BottomHeader>
  )
}

export default MobileBottomBar
