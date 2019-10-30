import Icon from '@akashaproject/design-system/dist/components/Icon'
import AkashaThemeContext from '@akashaproject/design-system/dist/providers/ThemeProvider'
import React, { ChangeEvent, useContext, useEffect } from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'

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

  return (
    <SidebarContainer>
      <Column size={6}>
        <MobileTopBarContainer>
          <MobileSearchLabel>
            <Icon type="search" width="20px" height="20px" color={theme.colors.dark} />
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
          <SearchHeader>{personas.length} personas</SearchHeader>
          <PersonasList personas={personas} apps={{}} showApps={false} />

          <SearchHeader>{apps.length} applications</SearchHeader>
          <AppsList apps={apps} />
        </PageContainer>
      </Column>
    </SidebarContainer>
  )
}

export default withRouter(Search)
