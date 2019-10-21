import Button from '@akashaproject/design-system/dist/components/Button'
import React from 'react'

import { MobileTopBarWithArrowCancelButton } from '../../shared/MobileTopBarWithArrowCancelButton'
import { Column } from '../shared/Container'
import { SidebarContainer } from '../shared/SidebarContainer'
import { AccountForm } from './components/AccountForm'
import {
  DeleteContainer,
  DeleteHeader,
  DeleteText,
  StyledMobilePageContainer,
} from './StyledAccount'

export interface AccountProps {
  onDeleteProfile: () => void
}

const Account: React.FC<AccountProps> = ({ onDeleteProfile }) => {
  return (
    <SidebarContainer>
      <Column size={3}>
        <MobileTopBarWithArrowCancelButton>Account</MobileTopBarWithArrowCancelButton>

        <StyledMobilePageContainer>
          <AccountForm />

          <DeleteContainer>
            <DeleteHeader>Delete akasha id account</DeleteHeader>
            <DeleteText>You’ll also lose access to all your third party apps.</DeleteText>
            <Button buttonType="alert" onClick={onDeleteProfile}>
              Delete Profile
            </Button>
          </DeleteContainer>
        </StyledMobilePageContainer>
      </Column>
    </SidebarContainer>
  )
}

export default Account
