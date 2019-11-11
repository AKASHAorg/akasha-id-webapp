import Icon from '@akashaproject/design-system/dist/components/Icon'
import AkashaThemeContext from '@akashaproject/design-system/dist/providers/ThemeProvider'
import React, { ChangeEvent, useContext, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { RouteComponentProps, withRouter } from 'react-router-dom'

import { translation } from '../../../consts/i18n'
import { Apps } from '../../../types/apps'
import { Persona } from '../../../types/users'
import { AppsList } from '../../shared/AppsList'
import { MobileTopBarContainer } from '../../shared/MobileTopBarContainer'
import { PersonasList } from '../../shared/PersonasList'
import { Column } from '../shared/Container'
import { SidebarContainer } from '../shared/SidebarContainer'
import {
  MobileSearchClose,
  MobileSearchInput,
  MobileSearchLabel,
  PageContainer,
  SearchHeader,
} from './StyledSearch'

import searchIcon from './search.svg'

export interface SearchProps extends RouteComponentProps<any> {
  personas: Persona[]
  apps: Apps
  searchText: string
  search: (text: string) => void
  startSearching: () => void
}

const Search: React.FC<SearchProps> = ({
  personas,
  apps,
  searchText,
  history,
  search,
  startSearching,
}) => {
  useEffect(() => {
    startSearching()
  }, [startSearching])

  const theme = useContext(AkashaThemeContext)

  const { t } = useTranslation()

  return (
    <SidebarContainer>
      <Column size={6}>
        <MobileTopBarContainer>
          <MobileSearchLabel>
            <img src={searchIcon} alt="Search" />
            <MobileSearchInput
              value={searchText}
              placeholder=""
              onChange={(e: ChangeEvent<HTMLInputElement>) => search(e.target.value)}
            />
          </MobileSearchLabel>
          <MobileSearchClose onClick={history.goBack}>
            <Icon type="close" width="21px" height="21px" color={theme.colors.dark} />
          </MobileSearchClose>
        </MobileTopBarContainer>

        <PageContainer>
          <SearchHeader>{t(translation.search.personas, { count: personas.length })}</SearchHeader>
          <PersonasList personas={personas} apps={{}} showApps={false} />

          <SearchHeader>{t(translation.search.apps, { count: apps.length })}</SearchHeader>
          <AppsList apps={apps} />
        </PageContainer>
      </Column>
    </SidebarContainer>
  )
}

export default withRouter(Search)
