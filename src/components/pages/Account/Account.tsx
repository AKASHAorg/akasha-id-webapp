import Button from '@akashaproject/design-system/dist/components/Button'
import React from 'react'
import { useTranslation } from 'react-i18next'

import { account } from '../../../consts/i18n'
import { ACCOUNT } from '../../../consts/i18n-ns'
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
  onDeleteAccount: () => void
}

const Account: React.FC<AccountProps> = ({ onDeleteAccount }) => {
  const { t } = useTranslation(ACCOUNT)

  return (
    <SidebarContainer>
      <Column size={3}>
        <MobileTopBarWithArrowCancelButton>{t(account.header)}</MobileTopBarWithArrowCancelButton>

        <StyledMobilePageContainer>
          <AccountForm />

          <DeleteContainer>
            <DeleteHeader>{t(account.deleteFormHeader)}</DeleteHeader>
            <DeleteText>{t(account.deleteFormText)}</DeleteText>
            <Button buttonType="alert" onClick={onDeleteAccount}>
              {t(account.deleteFormButton)}
            </Button>
          </DeleteContainer>
        </StyledMobilePageContainer>
      </Column>
    </SidebarContainer>
  )
}

export default Account
