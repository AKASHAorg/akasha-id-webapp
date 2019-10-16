import Button from '@akashaproject/design-system/dist/components/Button'
import Icon from '@akashaproject/design-system/dist/components/Icon'
import AkashaThemeContext from '@akashaproject/design-system/dist/providers/ThemeProvider'
import React, { useContext } from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'

import { Column } from '../shared/Container'
import { SidebarContainer } from '../shared/SidebarContainer'
import { AccountForm } from './components/AccountForm'
import {
  BackButton,
  DeleteContainer,
  DeleteHeader,
  DeleteText,
  MobileTopContainer,
  PageContainer,
  TopContainerLabel,
} from './StyledAccount'

export interface AccountProps extends RouteComponentProps<any> {
  onDeleteProfile: () => void
}

const Account: React.FC<AccountProps> = ({ history, onDeleteProfile }) => {
  const theme = useContext(AkashaThemeContext)

  return (
    <SidebarContainer>
      <Column size={3}>
        <MobileTopContainer>
          <BackButton onClick={history.goBack}>
            <Icon type="back" width="20px" height="20px" color={theme.colors.dark} />
          </BackButton>
          <TopContainerLabel>Account</TopContainerLabel>
        </MobileTopContainer>

        <PageContainer>
          <AccountForm />

          <DeleteContainer>
            <DeleteHeader>Delete akasha id account</DeleteHeader>
            <DeleteText>You’ll also lose access to all your third party apps.</DeleteText>
            <Button buttonType="alert" onClick={onDeleteProfile}>
              Delete Profile
            </Button>
          </DeleteContainer>
        </PageContainer>
      </Column>
    </SidebarContainer>
  )
}

export default withRouter(Account)
