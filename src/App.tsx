import { Notification } from '@akashaproject/design-system/dist/components/Notification'
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Route, RouteComponentProps, withRouter } from 'react-router-dom'
import { Action, Dispatch } from 'redux'

import fetchPublicAccountsActionCreator from './actions/landing/fetch-public-accounts'
import { ExportProfileModal } from './components/modals/ExportProfileModal'
import { Account } from './components/pages/Account'
import { AppCreated } from './components/pages/AppCreated'
import { AppDetails } from './components/pages/AppDetails'
import { Apps } from './components/pages/Apps'
import { CreateProfile } from './components/pages/CreateProfile'
import { DeleteProfile } from './components/pages/DeleteProfile'
import { DiscardChanges } from './components/pages/DiscardChanges'
import { EditProfile } from './components/pages/EditProfile'
import { Faq } from './components/pages/Faq'
import { Landing } from './components/pages/Landing'
import { ProfileCreated } from './components/pages/ProfileCreated'
import { ProfileDetails } from './components/pages/ProfileDetails'
import { Profiles } from './components/pages/Profiles'
import { RegisterApp } from './components/pages/RegisterApp'
import { Search } from './components/pages/Search'
import { Settings } from './components/pages/Settings'
import { SignIn } from './components/pages/SignIn'
import { SignUp } from './components/pages/SignUp'
import { SupportedApps } from './components/pages/SupportedApps'
import { UnlinkProfile } from './components/pages/UnlinkProfile'
import { WithRedirect } from './components/shared/WithRedirect'
import * as routes from './consts/routes'
import { State } from './states'

export interface AppProps extends RouteComponentProps {
  fetchPublicAccounts: () => void
}

const enchance = connect(
  (state: State) => ({}),
  (dispatch: Dispatch<Action>) => ({
    fetchPublicAccounts: () => dispatch(fetchPublicAccountsActionCreator()),
  }),
)

const App: React.FC<AppProps> = ({ fetchPublicAccounts }: AppProps) => {
  useEffect(() => {
    fetchPublicAccounts()
  }, [fetchPublicAccounts])

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
        path={routes.profileDetails}
        render={() => (
          <WithRedirect shouldBeSignedIn={true}>
            <ProfileDetails />
          </WithRedirect>
        )}
      />
      <Route
        strict={true}
        exact={true}
        path={routes.createProfile}
        render={() => (
          <WithRedirect shouldBeSignedIn={true}>
            <CreateProfile />
          </WithRedirect>
        )}
      />
      <Route
        strict={true}
        exact={true}
        path={routes.profileCreated}
        render={() => (
          <WithRedirect shouldBeSignedIn={true}>
            <ProfileCreated />
          </WithRedirect>
        )}
      />
      <Route
        strict={true}
        path={routes.editProfile}
        render={() => (
          <WithRedirect shouldBeSignedIn={true}>
            <EditProfile />
          </WithRedirect>
        )}
      />
      <Route
        strict={true}
        path={routes.deleteProfile}
        render={() => (
          <WithRedirect shouldBeSignedIn={true}>
            <DeleteProfile />
          </WithRedirect>
        )}
      />
      <Route
        strict={true}
        exact={true}
        path={routes.unlinkProfile}
        render={() => (
          <WithRedirect shouldBeSignedIn={true}>
            <UnlinkProfile />
          </WithRedirect>
        )}
      />
      <Route
        strict={true}
        exact={true}
        path={routes.discardChanges}
        render={() => (
          <WithRedirect shouldBeSignedIn={true}>
            <DiscardChanges />
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
        path={routes.appCreated}
        render={() => (
          <WithRedirect shouldBeSignedIn={true}>
            <AppCreated />
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
      <Route
        strict={true}
        exact={true}
        path={routes.supportedApps}
        render={() => (
          <WithRedirect shouldBeSignedIn={true}>
            <SupportedApps />
          </WithRedirect>
        )}
      />
      <Route
        strict={true}
        exact={true}
        path={routes.faq}
        render={() => (
          <WithRedirect shouldBeSignedIn={true}>
            <Faq />
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
