import Button from '@akashaproject/design-system/dist/components/Button'
import Checkbox from '@akashaproject/design-system/dist/components/Checkbox'
import Icon from '@akashaproject/design-system/dist/components/Icon'
import Modal from '@akashaproject/design-system/dist/components/Modal'
import AkashaThemeContext from '@akashaproject/design-system/dist/providers/ThemeProvider'
import { DocumentText } from 'grommet-icons'
import React, { useContext, useEffect, useState } from 'react'
import { Trans, useTranslation } from 'react-i18next'
import { css } from 'styled-components'

import { translation } from '../../../consts/i18n'
import { AddAppFormData, AddAppModalStep } from '../../../types/apps'
import { Column } from '../../pages/shared/Container'
import {
  Attribute,
  AttributesHeader,
  AttributesList,
  ButtonContainer,
  ContentContainer,
  ContentHeader,
  Description,
  Divider,
  FooterContainer,
  Header,
  HeaderContainer,
  ImageContainer,
  Link,
  Name,
  NameContainer,
  Nonce,
  Notification,
  Subheader,
} from './StyledAddAppModal'

export interface AddAppModalProps {
  step: AddAppModalStep
  name: string
  description: string
  icon: string
  url: string
  nonce: number
  attributes: string[]
  onClose: () => void
  onOk: (formData: AddAppFormData) => void
}

const attributeLabelMap: { [key: string]: string } = {
  avatar: 'Avatar',
  name: 'Name',
  description: 'Description',
  coverImage: 'Cover image',
  email: 'Email',
  url: 'URL',
  address: 'Address',
  ethAddress: 'EthAddress',
}

const AddAppModal: React.FC<AddAppModalProps> = ({
  step,
  name,
  description,
  icon,
  url,
  nonce,
  attributes,
  onClose,
  onOk,
}) => {
  const initialState = Object.fromEntries(attributes.map(attribute => [attribute, false]))
  const [state, changeState] = useState(initialState)
  const [opened, setOpened] = useState(window.innerWidth > 1444)
  const theme = useContext(AkashaThemeContext)

  useEffect(() => {
    const listener = () => {
      setOpened(window.innerWidth > 1444)
    }

    window.addEventListener('resize', listener)

    return () => {
      window.removeEventListener('resize', listener)
    }
  })

  const { t } = useTranslation()

  return (
    <Modal
      isOpen={opened}
      headerContent={`The following application requests access to your persona`}
      onOk={() => {}}
      onClose={() => {}}
      closeTimeoutMS={0}
      cancelButtonContent="Cancel"
      ariaHideApp={false}
      okButtonContent="Allow app"
      hideCancelButton={false}
      hideOkButton={step !== 'register-app'}
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
        box-shadow: none;
        border-color: ${props.theme.colors.border};
      `}
    >
      <Column size={6}>
        <HeaderContainer>
          <Header>{t(translation.modals.addApp.header, { appName: name })}</Header>
          <Subheader>{t(translation.modals.addApp.subheader)}</Subheader>
        </HeaderContainer>
        <Divider />
        <ContentContainer>
          <Column size={3}>
            <NameContainer>
              <ImageContainer src={icon} alt={name} />
              <Name>{name}</Name>
            </NameContainer>

            <ContentHeader>
              <Icon type="linkEntry" color={theme.colors.dark} width="16px" height="16px" />
              <div>{t(translation.modals.addApp.link)}</div>
            </ContentHeader>

            <Link>
              <a href={url}>{url}</a>
            </Link>

            <ContentHeader>
              <DocumentText color="dark-1" size="16px" />
              <div>{t(translation.modals.addApp.about)}</div>
            </ContentHeader>

            <Description>{description}</Description>
          </Column>
          <Column size={3}>
            <AttributesHeader>{t(translation.modals.addApp.selectAttributes)}</AttributesHeader>
            <AttributesList>
              {attributes.map(attribute => (
                <Attribute key={attribute}>
                  <Checkbox
                    label={attributeLabelMap[attribute]}
                    checked={state[attribute]}
                    onChange={(e: React.ChangeEvent<Element>) =>
                      changeState({ ...state, [attribute]: (e.target as HTMLInputElement).checked })
                    }
                  />
                </Attribute>
              ))}
            </AttributesList>
          </Column>
        </ContentContainer>
        <Divider />
        <FooterContainer>
          <Column size={3}>
            <Notification>
              <Trans
                i18nKey={translation.modals.addApp.notification}
                values={{ nonce, appName: name }}
              >
                Please make sure that {name} displays the same security code: <Nonce>{nonce}</Nonce>
              </Trans>
            </Notification>
          </Column>
          <ButtonContainer>
            <Button buttonType="primary" ghost={true} onClick={onClose}>
              {t(translation.modals.addApp.cancel)}
            </Button>
            <Button
              buttonType="primary"
              onClick={() =>
                onOk({
                  attributes: state as any,
                  personaId: '123',
                })
              }
            >
              {t(translation.modals.addApp.authorize)}
            </Button>
          </ButtonContainer>
        </FooterContainer>
      </Column>
    </Modal>
  )
}

export default AddAppModal
