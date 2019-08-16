import React, { useState } from 'react'
import Modal from '@akashaproject/design-system/dist/components/Modal'
import Input from '@akashaproject/design-system/dist/components/Input'
import Button from '@akashaproject/design-system/dist/components/Button';
import Icon from '@akashaproject/design-system/dist/components/Icon';
import { StyledContent, StyledRow, StyledColumn } from './StyledContent'

const RegisterModal = ({ isOpen, onCancel, onOk }) => {
  const [login, changeLogin] = useState('')
  const [password, changePassword] = useState('')

  return (
    <Modal
      isOpen={isOpen}
      title="Create a new profile"
      okText="Register"
      onCancel={onCancel}
      onOk={onOk}
    >
      <StyledContent>
        <StyledRow>
          <Icon type="photoImage" size="50px" color="#000"/>
          <Button buttonType="regular">
            Import a picture
          </Button>
        </StyledRow>
        <StyledRow>
          <StyledColumn>
            Username
          </StyledColumn>
          <StyledColumn>
            <Input
              value={login}
              onChange={changeLogin}
              placeholder="Your login here"
            />
          </StyledColumn>
        </StyledRow>
      </StyledContent>
    </Modal>
  )
}

export default RegisterModal
