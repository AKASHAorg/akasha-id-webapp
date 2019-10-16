import { Notification } from '@akashaproject/design-system/dist/components/Notification'
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Route, RouteComponentProps, withRouter } from 'react-router-dom'
import { Action, Dispatch } from 'redux'

import fetchPublicProfilesActionCreator from './actions/landing/fetch-public-profiles'
import { ExportProfileModal } from './components/modals/ExportProfileModal'
import { Account } from './components/pages/Account'
import { AppDetails } from './components/pages/AppDetails'
import { Apps } from './components/pages/Apps'
import { Landing } from './components/pages/Landing'
import { Profile } from './components/pages/Profile'
import { Profiles } from './components/pages/Profiles'
import { RegisterApp } from './components/pages/RegisterApp'
import { Search } from './components/pages/Search'
import { Settings } from './components/pages/Settings'
import { SignIn } from './components/pages/SignIn'
import { SignUp } from './components/pages/SignUp'
import { WithRedirect } from './components/shared/WithRedirect'
import * as routes from './consts/routes'
import { State } from './states'

export interface AppProps extends RouteComponentProps {
  signedIn: boolean
  fetchPublicProfiles: () => void
}

const enchance = connect(
  (state: State): Pick<AppProps, 'signedIn'> => ({
    signedIn: state.account.signedIn,
  }),
  (dispatch: Dispatch<Action>) => ({
    fetchPublicProfiles: () => dispatch(fetchPublicProfilesActionCreator()),
  }),
)

const App: React.FC<AppProps> = ({ signedIn, fetchPublicProfiles }: AppProps) => {
  useEffect(() => {
    fetchPublicProfiles()
  }, [fetchPublicProfiles])

  return (
    <>
      <Route
        strict={true}
        exact={true}
        path={routes.signUp}
        render={() => (
          <WithRedirect shouldBeSignedIn={false}>
            <SignUp />
          </WithRedirect>
        )}
      />
      <Route
        strict={true}
        path={routes.signIn}
        render={() => (
          <WithRedirect shouldBeSignedIn={false}>
            <SignIn />
          </WithRedirect>
        )}
      />
      <Route
        strict={true}
        exact={true}
        path={routes.profiles}
        render={() => (
          <WithRedirect shouldBeSignedIn={true}>
            <Profiles />
          </WithRedirect>
        )}
      />
      <Route
        strict={true}
        exact={true}
        path={routes.profile}
        render={() => (
          <WithRedirect shouldBeSignedIn={true}>
            <Profile />
          </WithRedirect>
        )}
      />
      <Route
        strict={true}
        exact={true}
        path={routes.apps}
        render={() => (
          <WithRedirect shouldBeSignedIn={true}>
            <Apps />
          </WithRedirect>
        )}
      />
      <Route
        strict={true}
        exact={true}
        path={routes.account}
        render={() => (
          <WithRedirect shouldBeSignedIn={true}>
            <Account />
          </WithRedirect>
        )}
      />
      <Route
        strict={true}
        path={routes.appDetails}
        render={() => (
          <WithRedirect shouldBeSignedIn={true}>
            <AppDetails />
          </WithRedirect>
        )}
      />
      <Route
        strict={true}
        exact={true}
        path={routes.search}
        render={() => (
          <WithRedirect shouldBeSignedIn={true}>
            <Search />
          </WithRedirect>
        )}
      />
      <Route
        strict={true}
        exact={true}
        path={routes.settings}
        render={() => (
          <WithRedirect shouldBeSignedIn={true}>
            <Settings />
          </WithRedirect>
        )}
      />
      <Route strict={true} path={routes.registerApp} render={() => <RegisterApp />} />
      <Route
        exact={true}
        path={routes.landing}
        render={() => (
          <WithRedirect shouldBeSignedIn={false}>
            <Landing />
          </WithRedirect>
        )}
      />

      <Notification
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={true}
        closeOnClick={true}
        rtl={false}
        pauseOnVisibilityChange={false}
        draggable={false}
        pauseOnHover={false}
      />
      <ExportProfileModal />
    </>
  )
}

export default enchance(withRouter(App))
