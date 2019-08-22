import Input from '@akashaproject/design-system/dist/components/Input'
import Modal from '@akashaproject/design-system/dist/components/Modal'
import React from 'react'
import styled from 'styled-components'

interface SignUpModalProps {
  isOpen: boolean
  step: 'login' | 'password'
  login: string
  password: string
  errorMessage: string
  onCancel: () => void
  onChangeLogin: (password: string) => void
  onChangePassword: (password: string) => void
  onOk: () => void
}

const StyledErrorMessage = styled.span`
  color: ${props => props.theme.colors.red};
`

const SignUpModal: React.FC<SignUpModalProps> = ({
  isOpen,
  login,
  password,
  errorMessage,
  step,
  onCancel,
  onChangeLogin,
  onChangePassword,
  onOk,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      headerContent="Sign up"
      hideCancelButton={false}
      hideOkButton={false}
      onOk={onOk}
      onCancel={onCancel}
      closeTimeoutMS={0}
      cancelButtonContent="Cancel"
      ariaHideApp={false}
    >
      {errorMessage && <StyledErrorMessage>{errorMessage}</StyledErrorMessage>}
      {step === 'login' && (
        <Input
          placeholder="Login"
          value={login}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            onChangeLogin(e.target.value)
          }}
        />
      )}
      {step === 'password' && (
        <Input
          placeholder="Password"
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            onChangePassword(e.target.value)
          }}
          type="password"
        />
      )}
    </Modal>
  )
}

export default SignUpModal
