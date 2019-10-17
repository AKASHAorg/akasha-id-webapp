import Icon from '@akashaproject/design-system/dist/components/Icon'
import AkashaThemeContext from '@akashaproject/design-system/dist/providers/ThemeProvider'
import React, { ChangeEvent, useContext } from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'

import { Apps } from '../../../types/apps'
import { AppsList } from '../../shared/AppsList'
import { Column } from '../shared/Container'
import { SidebarContainer } from '../shared/SidebarContainer'
import {
  MobileSearchClose,
  MobileSearchInput,
  MobileSearchLabel,
  MobileTopContainer,
  PageContainer,
  SearchHeader,
} from './StyledSearch'

export interface SearchProps extends RouteComponentProps<any> {
  apps: Apps
  searchText: string
  search: (text: string) => void
}

const Search: React.FC<SearchProps> = ({ apps, searchText, history, search }) => {
  const theme = useContext(AkashaThemeContext)

  return (
    <SidebarContainer>
      <Column size={6}>
        <MobileTopContainer>
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
        </MobileTopContainer>

        <PageContainer>
          <SearchHeader>0 Persona</SearchHeader>
          <SearchHeader>{Object.keys(apps).length} applications</SearchHeader>
          <AppsList apps={apps} />
        </PageContainer>
      </Column>
    </SidebarContainer>
  )
}

export default withRouter(Search)
