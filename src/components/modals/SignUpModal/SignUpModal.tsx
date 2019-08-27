import Input from '@akashaproject/design-system/dist/components/Input'
import Modal from '@akashaproject/design-system/dist/components/Modal'
import React from 'react'

interface SignUpModalProps {
  step: 'get-link' | 'enter-login' | 'send-claim' | 'request-profile'
  login: string
  isOpen: boolean
  signUpLink: string | null
  onClose: () => void
  onOk: () => void
  onChangeLogin: (login: string) => void
}

const SignUpModal: React.FC<SignUpModalProps> = ({
  step,
  login,
  isOpen,
  signUpLink,
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
      {step === 'get-link' && <span>Establishing connection...</span>}
      {step === 'enter-login' && (
        <>
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
