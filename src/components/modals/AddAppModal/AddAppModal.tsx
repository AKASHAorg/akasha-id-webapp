import Checkbox from '@akashaproject/design-system/dist/components/Checkbox'
import Modal from '@akashaproject/design-system/dist/components/Modal'
import React, { useState } from 'react'
import { AddAppModalStep } from '../../../types/apps'

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
  onClose: () => void
  onOk: (shareUsername: boolean) => void
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
  onClose,
  onOk,
}) => {
  const [shareUsername, changeShareUsername] = useState(false)

  return (
    <Modal
      isOpen={isOpen}
      headerContent={`Add app`}
      onOk={() => onOk(shareUsername)}
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
      {step === 'accept-app' && <span>Accepting app...</span>}
      {step === 'decline-app' && <span>Declining app...</span>}
      <>
        <h4>
          Application
          <a href={url}>
            <img src={icon} alt={name} />
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
        label="Share username"
        checked={shareUsername}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeShareUsername(e.target.checked)}
      />
    </Modal>
  )
}

export default SignInModal
