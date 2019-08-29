import Checkbox from '@akashaproject/design-system/dist/components/Checkbox'
import Modal from '@akashaproject/design-system/dist/components/Modal'
import React from 'react'
import { AddAppModalStep } from '../../../states/apps'

interface SignInModalProps {
  isOpen: boolean
  step: AddAppModalStep
  name: string
  description: string
  icon: string
  url: string
  channel: string
  appKey: string
  nonce: number
  token: string
  shareFirstName: boolean
  shareLastName: boolean
  onClose: () => void
  onOk: () => void
  onChangeShareFirstName: (value: boolean) => void
  onChangeShareLastName: (value: boolean) => void
}

const SignInModal: React.FC<SignInModalProps> = ({
  isOpen,
  step,
  name,
  description,
  icon,
  url,
  channel,
  appKey,
  nonce,
  token,
  shareFirstName,
  shareLastName,
  onClose,
  onOk,
  onChangeShareFirstName,
  onChangeShareLastName,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      headerContent={`Add app`}
      onOk={onOk}
      onClose={onClose}
      closeTimeoutMS={0}
      cancelButtonContent="Cancel"
      ariaHideApp={false}
      okButtonContent="Accept"
      hideCancelButton={false}
      hideOkButton={step !== 'register-app'}
    >
      {step === 'generate-link' && <span>Generating link...</span>}
      {step === 'register-app' && <span>Registering app...</span>}
      {step === 'request-profile' && <span>Requesting profile...</span>}
      {step === 'send-claim' && <span>Sending claim...</span>}
      <>
        <h4>
          Application
          <a href={url}>
            <img src={icon} />
            {name}
          </a>
          requests access to profile elements.
        </h4>
        <p>{description}</p>
        <p>Channel: {channel}</p>
        <p>Key: {appKey}</p>
        <p>Nonce: {nonce}</p>
        <p>Token: {token}</p>
      </>
      <Checkbox
        label="Share first name"
        checked={shareFirstName}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          onChangeShareFirstName(e.target.checked)
        }
      />
      <Checkbox
        label="Share last name"
        checked={shareLastName}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          onChangeShareLastName(e.target.checked)
        }
      />
    </Modal>
  )
}

export default SignInModal
