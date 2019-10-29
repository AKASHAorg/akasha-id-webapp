import Button from '@akashaproject/design-system/dist/components/Button'
import Modal from '@akashaproject/design-system/dist/components/Modal'
import React, { useEffect } from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { css } from 'styled-components'

import { borders } from '../../../styles/index'
import { Apps } from '../../../types/apps'
import { AppImage } from '../../shared/AppImage'
import { RowTextContainer } from '../../shared/RowTextContainer'
import {
  ModalAppsList,
  ModalAppsRow,
  ModalButtonContainer,
  ModalContent,
  ModalHeader,
  ModalText,
} from './Styled'

export interface DeleteProfileModalProps extends RouteComponentProps<any> {
  id: string
  name: string
  apps: Apps
  onDeleteProfile: (id: string) => void
  loadApps: () => void
}

const DeleteProfileModal: React.FC<DeleteProfileModalProps> = ({
  id,
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
      extend={() => borders.modal}
    >
      <ModalContent>
        <ModalHeader>Delete {name} Persona</ModalHeader>
        <ModalText>
          You are about to delete your {name} persona. When deleted the following applications will
          no longer be accessible.
        </ModalText>
        <ModalAppsList>
          {Object.entries(apps).map(([appId, app]) => (
            <ModalAppsRow key={appId}>
              <AppImage icon={app.icon} name={app.name} />
              <RowTextContainer header={app.name} subheader="Last requested 2 days ago" />
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
          <Button buttonType="primary" onClick={() => onDeleteProfile(id)}>
            Delete Persona
          </Button>
        </ModalButtonContainer>
      </ModalContent>
    </Modal>
  )
}

export default withRouter(DeleteProfileModal)
