import Input from '@akashaproject/design-system/dist/components/Input'
import Modal from '@akashaproject/design-system/dist/components/Modal'
import React from 'react'
import WithLabel from '../../shared/WithLabel'

interface SignInModalProps {
  isOpen: boolean
  username: string
  password: string
  passwordError: string
  onClose: () => void
  onOk: () => void
  onChangePassword: (login: string) => void
}

const SignInModal: React.FC<SignInModalProps> = ({
  isOpen,
  username,
  password,
  passwordError,
  onClose,
  onOk,
  onChangePassword,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      headerContent={`Sign in as ${username}`}
      onOk={onOk}
      onClose={onClose}
      closeTimeoutMS={0}
      cancelButtonContent="Cancel"
      ariaHideApp={false}
      okButtonContent="Sign in"
      hideCancelButton={false}
      hideOkButton={false}
    >
      <WithLabel label="Password" error={passwordError}>
        <Input
          placeholder="Password"
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChangePassword(e.target.value)}
          type="password"
        />
      </WithLabel>
    </Modal>
  )
}

export default SignInModal
