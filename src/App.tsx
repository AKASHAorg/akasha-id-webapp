import React from 'react'
import { connect } from 'react-redux'
import { Redirect, Route, RouteComponentProps, withRouter } from 'react-router-dom'
import { AddAppModal } from './components/modals/AddAppModal'
import { SignInModal } from './components/modals/SignInModal'
import { SignUpModal } from './components/modals/SignUpModal'
import { Apps } from './components/pages/Apps'
import { Landing } from './components/pages/Landing'
import { Profile } from './components/pages/Profile'
import { WithSidebar } from './components/pages/WithSidebar'
import { State } from './states'

export interface ProfileProps extends RouteComponentProps {
  signedIn: boolean
}

const enchance = connect(
  (state: State): Pick<ProfileProps, 'signedIn'> => ({
    signedIn: state.profile.signedIn,
  }),
)

const App: React.FC<ProfileProps> = ({ signedIn, location }) => {
  return (
    <>
      {!signedIn && (
        <>
          {location.pathname !== '/' && <Redirect to="/" />}
          <Route exact={true} path="/" component={Landing} />
        </>
      )}

      {signedIn && (
        <>
          {location.pathname === '/' && <Redirect to="/profile" />}
          <WithSidebar>
            <Route exact={true} path="/profile" component={Profile} />
            <Route exact={true} path="/apps" component={Apps} />
          </WithSidebar>
        </>
      )}
      <SignUpModal />
      <SignInModal />
      <AddAppModal />
    </>
  )
}

export default enchance(withRouter(App))
