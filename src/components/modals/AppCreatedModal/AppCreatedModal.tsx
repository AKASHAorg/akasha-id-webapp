import Button from '@akashaproject/design-system/dist/components/Button'
import Modal from '@akashaproject/design-system/dist/components/Modal'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { css } from 'styled-components'

import { translation } from '../../../consts/i18n'
import * as routes from '../../../consts/routes'
import { borders } from '../../../styles/index'
import { Header, Logo, ModalContent, PaleText } from './Styled'

import appCreated from './app-created.png'

export interface PersonaCreatedModalProps extends RouteComponentProps<any> {}

const PersonaCreatedModal: React.FC<PersonaCreatedModalProps> = ({ history }) => {
  const { t } = useTranslation()

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
        <Logo>
          <img src={appCreated} alt="Application created" />
        </Logo>
        <Header>{t(translation.modals.appCreated.header)}</Header>
        <PaleText>{t(translation.modals.appCreated.text)}</PaleText>
        <Button
          buttonType="primary"
          onClick={() => {
            history.replace(routes.apps)
          }}
        >
          {t(translation.modals.appCreated.ok)}
        </Button>
      </ModalContent>
    </Modal>
  )
}

export default withRouter(PersonaCreatedModal)
