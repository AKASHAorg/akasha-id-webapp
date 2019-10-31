import Button from '@akashaproject/design-system/dist/components/Button'
import Modal from '@akashaproject/design-system/dist/components/Modal'
import React from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { css } from 'styled-components'

import * as routes from '../../../consts/routes'
import { borders } from '../../../styles/index'
import { Header, Logo, ModalContent, PaleText, PersonasLink } from './Styled'

export interface PersonaCreatedModalProps extends RouteComponentProps<any> {}

const PersonaCreatedModal: React.FC<PersonaCreatedModalProps> = ({ history }) => {
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
        <Logo />
        <Header>New Persona Created</Header>
        <PaleText>You can now connect it to a third party App by scanning the QR Code</PaleText>
        <Button
          buttonType="primary"
          onClick={() => {
            history.push(routes.qrCode)
          }}
        >
          Scan QR code
        </Button>
        <PersonasLink to={routes.personas}>Maybe Later</PersonasLink>
      </ModalContent>
    </Modal>
  )
}

export default withRouter(PersonaCreatedModal)
