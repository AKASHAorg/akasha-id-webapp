import React, { useState } from 'react'
import Modal from '@akashaproject/design-system/dist/components/Modal'
import Input from '@akashaproject/design-system/dist/components/Input'
import { StyledContent, StyledColumn } from './StyledContent'

const LoginModal = ({ isOpen, onCancel, onOk }) => {
  const [login, changeLogin] = useState('')

  return (
    <Modal
      isOpen={isOpen}
      title="Log in"
      okText="Log in"
      onCancel={onCancel}
      onOk={onOk}
    >
      <StyledContent>
        <StyledColumn>
          Login
        </StyledColumn>
        <StyledColumn>
          <Input
            value={login}
            onChange={changeLogin}
            placeholder="Your login here"
          />
        </StyledColumn>
      </StyledContent>
    </Modal>
  )
}

export default LoginModal
