import Button from '@akashaproject/design-system/dist/components/Button'
import Modal from '@akashaproject/design-system/dist/components/Modal'
import React from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { css } from 'styled-components'

import * as routes from '../../../consts/routes'
import { borders } from '../../../styles/index'
import { Header, Logo, ModalContent, PaleText, ProfilesLink } from './Styled'

export interface ProfileCreatedModalProps extends RouteComponentProps<any> {}

const ProfileCreatedModal: React.FC<ProfileCreatedModalProps> = () => {
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
        <Logo />
        <Header>New Persona Created</Header>
        <PaleText>You can now connect it to a third party App by scanning the QR Code</PaleText>
        <Button buttonType="primary" onClick={() => {}}>
          Scan QR code
        </Button>
        <ProfilesLink to={routes.profiles}>Maybe Later</ProfilesLink>
      </ModalContent>
    </Modal>
  )
}

export default withRouter(ProfileCreatedModal)
