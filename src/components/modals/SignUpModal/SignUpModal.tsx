import Input from '@akashaproject/design-system/dist/components/Input'
import Modal from '@akashaproject/design-system/dist/components/Modal'
import React from 'react'

interface SignUpModalProps {
  step: 'register-app' | 'enter-login' | 'send-claim' | 'request-profile'
  login: string
  isOpen: boolean
  name: string
  description: string
  icon: string
  url: string
  channel: string
  appKey: string
  nonce: number
  token: string
  onClose: () => void
  onOk: () => void
  onChangeLogin: (login: string) => void
}

const SignUpModal: React.FC<SignUpModalProps> = ({
  step,
  login,
  isOpen,
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
  onChangeLogin,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      headerContent="Sign up"
      hideCancelButton={false}
      hideOkButton={step !== 'enter-login'}
      onOk={onOk}
      onClose={onClose}
      closeTimeoutMS={0}
      cancelButtonContent="Cancel"
      ariaHideApp={false}
      okButtonContent="Accept"
    >
      {step === 'register-app' && <span>Establishing connection...</span>}
      {step === 'enter-login' && (
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
          <Input
            placeholder="Login"
            value={login}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChangeLogin(e.target.value)}
          />
        </>
      )}
      {step === 'send-claim' && <span>Sending claim...</span>}
    </Modal>
  )
}

export default SignUpModal
