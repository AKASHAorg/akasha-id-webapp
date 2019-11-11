import Button from '@akashaproject/design-system/dist/components/Button'
import Modal from '@akashaproject/design-system/dist/components/Modal'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { css } from 'styled-components'

import { translation } from '../../../consts/i18n'
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

export interface DeletePersonaModalProps extends RouteComponentProps<any> {
  id: string
  name: string
  apps: Apps
  onDeletePersona: (id: string) => void
}

const DeletePersonaModal: React.FC<DeletePersonaModalProps> = ({
  id,
  name,
  apps,
  onDeletePersona,
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
          {t(translation.modals.deletePersona.header, { personaName: name })}
        </ModalHeader>
        <ModalText>{t(translation.modals.deletePersona.text, { personaName: name })}</ModalText>
        <ModalAppsList>
          {Object.entries(apps).map(([appId, app]) => (
            <ModalAppsRow key={appId}>
              <AppImage icon={app.appInfo.icon} name={app.appInfo.name} />
              <RowTextContainer header={app.appInfo.name} subheader="Last requested 2 days ago" />
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
            {t(translation.modals.deletePersona.cancel)}
          </Button>
          <Button buttonType="primary" onClick={() => onDeletePersona(id)}>
            {t(translation.modals.deletePersona.delete)}
          </Button>
        </ModalButtonContainer>
      </ModalContent>
    </Modal>
  )
}

export default withRouter(DeletePersonaModal)
