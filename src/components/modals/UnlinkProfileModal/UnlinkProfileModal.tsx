import Button from '@akashaproject/design-system/dist/components/Button'
import Modal from '@akashaproject/design-system/dist/components/Modal'
import React from 'react'
import { Redirect, RouteComponentProps, withRouter } from 'react-router-dom'
import { css } from 'styled-components'

import * as routes from '../../../consts/routes'
import { borders } from '../../../styles/index'
import { App } from '../../../types/apps'
import { AppImage } from '../../shared/AppImage'
import { RowTextContainer } from '../../shared/RowTextContainer'
import {
  ModalAppContainer,
  ModalButtonContainer,
  ModalContent,
  ModalHeader,
  ModalText,
} from './Styled'

export interface DeleteProfileModalProps extends RouteComponentProps<any> {
  name: string
  app?: App
  redirect: boolean
  onRemoveApp: () => void
}

const DeleteProfileModal: React.FC<DeleteProfileModalProps> = ({
  name,
  app,
  redirect,
  onRemoveApp,
  history,
}) => {
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
      {redirect && <Redirect to={routes.apps} />}

      <ModalContent>
        <ModalHeader>
          Revoke the {name} persona from the {app!.name} app?
        </ModalHeader>
        <ModalText>
          This means the app will no longer receive updates until it’s linked back on. To fully
          delete your third party account, please do it directly on there.
        </ModalText>

        <ModalAppContainer>
          <AppImage icon={app!.icon} name={app!.name} />
          <RowTextContainer header={app!.name} subheader={name} />
        </ModalAppContainer>

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
          <Button buttonType="primary" onClick={onRemoveApp}>
            Unlink Persona
          </Button>
        </ModalButtonContainer>
      </ModalContent>
    </Modal>
  )
}

export default withRouter(DeleteProfileModal)
