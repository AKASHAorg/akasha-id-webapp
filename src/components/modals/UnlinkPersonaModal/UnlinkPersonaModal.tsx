import Button from '@akashaproject/design-system/dist/components/Button'
import Modal from '@akashaproject/design-system/dist/components/Modal'
import React from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { css } from 'styled-components'

import { borders } from '../../../styles/index'
import { App } from '../../../types/apps'
import { Persona } from '../../../types/users'
import { AppImage } from '../../shared/AppImage'
import { RowTextContainer } from '../../shared/RowTextContainer'
import {
  ModalAppContainer,
  ModalButtonContainer,
  ModalContent,
  ModalHeader,
  ModalText,
} from './Styled'

export interface UnlinkPersonaModalProps extends RouteComponentProps<any> {
  app: App
  persona: Persona
  onRemoveApp: () => void
}

const UnlinkPersonaModal: React.FC<UnlinkPersonaModalProps> = ({
  app,
  persona,
  onRemoveApp,
  history,
}) => {
  return (
    <Modal
      isOpen={true}
      headerContent={`The following application requests access to your persona`}
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
        <ModalHeader>
          Revoke the {persona.personaName} persona from the {app.appInfo.name} app?
        </ModalHeader>
        <ModalText>
          This means the app will no longer receive updates until it’s linked back on. To fully
          delete your third party account, please do it directly on there.
        </ModalText>

        <ModalAppContainer>
          <AppImage icon={app.appInfo.icon} name={app.appInfo.name} />
          <RowTextContainer header={app.appInfo.name} subheader={app.appInfo.description} />
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

export default withRouter(UnlinkPersonaModal)
