import Button from '@akashaproject/design-system/dist/components/Button'
import Modal from '@akashaproject/design-system/dist/components/Modal'
import React, { useEffect } from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { css } from 'styled-components'

import { Apps } from '../../../types/apps'
import {
  AppDate,
  AppHeader,
  AppIconContainer,
  AppTextContainer,
  ModalAppsList,
  ModalAppsRow,
  ModalButtonContainer,
  ModalContent,
  ModalHeader,
  ModalText,
} from './Styled'

export interface DeleteProfileModalProps extends RouteComponentProps<any> {
  name: string
  apps: Apps
  onDeleteProfile: () => void
  loadApps: () => void
}

const DeleteProfileModal: React.FC<DeleteProfileModalProps> = ({
  name,
  apps,
  onDeleteProfile,
  loadApps,
  history,
}) => {
  useEffect(() => {
    loadApps()
  }, [loadApps])

  return (
    <Modal
      isOpen={true}
      headerContent={`The following application requests access to your profile`}
      onOk={() => {}}
      onClose={() => {}}
      closeTimeoutMS={0}
      cancelButtonContent="Cancel"
      ariaHideApp={false}
      okButtonContent="Allow app"
      hideCancelButton={true}
      hideOkButton={true}
      extendHeader={() =>
        css`
          display: none;
        `
      }
      extendFooter={() =>
        css`
          display: none;
        `
      }
      extendBody={() =>
        css`
          padding: 0;
        `
      }
      extend={props => css`
        border-radius: 8px;
        box-shadow: 0 4px 16px 0 rgba(83, 98, 124, 0.06);
        border: 1px solid #edf0f5;
      `}
    >
      <ModalContent>
        <ModalHeader>Delete {name} Persona</ModalHeader>
        <ModalText>
          You are about to delete your Social persona. When deleted the following applications will
          no longer be accessible.
        </ModalText>
        <ModalAppsList>
          {Object.entries(apps).map(([appId, app]) => (
            <ModalAppsRow key={appId}>
              <AppIconContainer>
                <img src={app.icon} alt={app.name} />
              </AppIconContainer>
              <AppTextContainer>
                <AppHeader>{app.name}</AppHeader>
                <AppDate>Last requested 2 days ago</AppDate>
              </AppTextContainer>
            </ModalAppsRow>
          ))}
        </ModalAppsList>
        <ModalButtonContainer>
          <Button
            buttonType="primary"
            ghost={true}
            onClick={() => {
              history.goBack()
            }}
          >
            Cancel
          </Button>
          <Button buttonType="primary" onClick={onDeleteProfile}>
            Delete Persona
          </Button>
        </ModalButtonContainer>
      </ModalContent>
    </Modal>
  )
}

export default withRouter(DeleteProfileModal)
