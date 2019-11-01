import Button from '@akashaproject/design-system/dist/components/Button'
import Modal from '@akashaproject/design-system/dist/components/Modal'
import { History } from 'history'
import React from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { css } from 'styled-components'

import { borders } from '../../../styles/index'
import { ButtonContainer, ModalContent, ModalHeader } from './Styled'

export interface DiscardChangesModalProps extends RouteComponentProps<any> {
  isOpen: boolean
  onDiscard: (history: History<any>) => void
  onSave: (history: History<any>) => void
}

const DiscardChangesModal: React.FC<DiscardChangesModalProps> = ({ history }) => {
  return (
    <Modal
      isOpen={true}
      headerContent={`The following application requests access to your persona`}
      onOk={() => {}}
      onClose={() => {}}
      closeTimeoutMS={0}
      cancelButtonContent="Discard"
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
        <ModalHeader>You have some unsaved changes</ModalHeader>

        <ButtonContainer>
          <Button buttonType="primary" ghost={true} onClick={history.goBack}>
            Discard
          </Button>
          <Button buttonType="primary" onClick={() => {}}>
            Save Changes
          </Button>
        </ButtonContainer>
      </ModalContent>
    </Modal>
  )
}

export default withRouter(DiscardChangesModal)
