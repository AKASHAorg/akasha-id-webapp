import Input from '@akashaproject/design-system/dist/components/Input'
import Modal from '@akashaproject/design-system/dist/components/Modal'
import React from 'react'
import styled from 'styled-components'

interface LogInModalProps {
  isOpen: boolean
  password: string
  errorMessage: string
  onCancel: () => void
  onChangePassword: (password: string) => void
  onOk: () => void
}

const StyledErrorMessage = styled.span`
  color: ${props => props.theme.colors.red};
`

const LogInModal: React.FC<LogInModalProps> = ({
  isOpen,
  password,
  errorMessage,
  onCancel,
  onChangePassword,
  onOk,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      headerContent="Login"
      hideCancelButton={false}
      hideOkButton={false}
      onOk={onOk}
      onCancel={onCancel}
      closeTimeoutMS={0}
      cancelButtonContent="Cancel"
      ariaHideApp={false}
    >
      {errorMessage && <StyledErrorMessage>{errorMessage}</StyledErrorMessage>}
      <Input
        placeholder="Password"
        value={password}
        type="password"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          onChangePassword(e.target.value)
        }}
      />
    </Modal>
  )
}

export default LogInModal
