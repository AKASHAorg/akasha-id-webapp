import Button from '@akashaproject/design-system/dist/components/Button'
import Modal from '@akashaproject/design-system/dist/components/Modal'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { css } from 'styled-components'

import { translation } from '../../../consts/i18n'
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
        <ModalHeader>
          {t(translation.modals.unlinkPersona.header, {
            personaName: persona.personaName,
            appName: app.appInfo.name,
          })}
        </ModalHeader>
        <ModalText>{t(translation.modals.unlinkPersona.text)}</ModalText>

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
            {t(translation.modals.unlinkPersona.cancel)}
          </Button>
          <Button buttonType="primary" onClick={onRemoveApp}>
            {t(translation.modals.unlinkPersona.unlink)}
          </Button>
        </ModalButtonContainer>
      </ModalContent>
    </Modal>
  )
}

export default withRouter(UnlinkPersonaModal)
