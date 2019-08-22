import React from 'react'
import { HashRouter, Route } from 'react-router-dom'
import { LogInModal } from './components/modals/LoginModal'
import { SignUpModal } from './components/modals/SignUpModal'
import { Landing } from './components/pages/Landing'
import { Profile } from './components/pages/Profile'

const App: React.FC = () => {
  return (
    <HashRouter>
      <Route exact={true} path="/" component={Landing} />
      <Route exact={true} path="/profile" component={Profile} />
      <LogInModal />
      <SignUpModal />
    </HashRouter>
  )
}

export default App
