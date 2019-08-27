import React from 'react'
import { connect } from 'react-redux'
import { Redirect, Route, RouteComponentProps, withRouter } from 'react-router-dom'
import { SignUpModal } from './components/modals/SignUpModal'
import { Apps } from './components/pages/Apps'
import { Landing } from './components/pages/Landing'
import { Profile } from './components/pages/Profile'
import { WithSidebar } from './components/pages/WithSidebar'
import { State } from './states'

export interface ProfileProps extends RouteComponentProps {
  loggedIn: boolean
}

const enchance = connect(
  (state: State): Pick<ProfileProps, 'loggedIn'> => ({
    loggedIn: state.landing.loggedIn,
  }),
)

const App: React.FC<ProfileProps> = ({ loggedIn, location }) => {
  return (
    <>
      {!loggedIn && (
        <>
          {location.pathname !== '/' && <Redirect to="/" />}
          <Route exact={true} path="/" component={Landing} />
        </>
      )}

      {loggedIn && (
        <>
          {location.pathname === '/' && <Redirect to="/profile" />}
          <WithSidebar>
            <Route exact={true} path="/profile" component={Profile} />
            <Route exact={true} path="/apps" component={Apps} />
          </WithSidebar>
        </>
      )}
      <SignUpModal />
    </>
  )
}

export default enchance(withRouter(App))
