import React from 'react'
import { useTranslation } from 'react-i18next'

import { translation } from '../../../consts/i18n'
import * as routes from '../../../consts/routes'
import { BottomHeader, PageLink } from './Styled'

import appsIcon from './apps.svg'
import personasIcon from './personas.svg'

const MobileBottomBar: React.FC<{}> = () => {
  const { t } = useTranslation()

  return (
    <BottomHeader>
      <PageLink to={routes.personas}>
        <img src={personasIcon} alt="Personas" />
        <h4>{t(translation.mobilePageTitles.personas)}</h4>
      </PageLink>

      <PageLink to={routes.apps}>
        <img src={appsIcon} alt="Applications" />
        <h4>{t(translation.mobilePageTitles.apps)}</h4>
      </PageLink>
    </BottomHeader>
  )
}

export default MobileBottomBar
