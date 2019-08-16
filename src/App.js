import React, { useState } from 'react';
import LoginModal from './components/LoginModal'
import RegisterModal from './components/RegisterModal'
import Button from '@akashaproject/design-system/dist/components/Button'

function App() {
  const [loginModalOpen, toggleLoginModal] = useState(false)
  const [registerModalOpen, toggleRegisterModal] = useState(false)

  return (
    <>
      <Button
        buttonType="primary"
        ghost
        onClick={() => toggleRegisterModal(true)}
      >
        Register
      </Button>
      <Button
        buttonType="primary"
        onClick={() => toggleLoginModal(true)}
      >
        Login
      </Button>

      <LoginModal
        isOpen={loginModalOpen}
        onCancel={() => toggleLoginModal(false)}
        onOk={() => toggleLoginModal(false)}
      />
      <RegisterModal
        isOpen={registerModalOpen}
        onCancel={() => toggleRegisterModal(false)}
        onOk={() => toggleRegisterModal(false)}
      />
    </>
  );
}

export default App;
