import { Notification } from '@akashaproject/design-system/dist/components/Notification'
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Route, RouteComponentProps, withRouter } from 'react-router-dom'
import { Action, Dispatch } from 'redux'

import fetchPublicAccountsActionCreator from './actions/landing/fetch-public-accounts'
import { ExportPersonaModal } from './components/modals/ExportPersonaModal'
import { Account } from './components/pages/Account'
import { AppCreated } from './components/pages/AppCreated'
import { AppDetails } from './components/pages/AppDetails'
import { Apps } from './components/pages/Apps'
import { CreatePersona } from './components/pages/CreatePersona'
import { DeletePersona } from './components/pages/DeletePersona'
import { DiscardChanges } from './components/pages/DiscardChanges'
import { EditPersona } from './components/pages/EditPersona'
import { Faq } from './components/pages/Faq'
import { Landing } from './components/pages/Landing'
import { PersonaCreated } from './components/pages/PersonaCreated'
import { PersonaDetails } from './components/pages/PersonaDetails'
import { Personas } from './components/pages/Personas'
import { QRCode } from './components/pages/QRCode'
import { RegisterApp } from './components/pages/RegisterApp'
import { Search } from './components/pages/Search'
import { Settings } from './components/pages/Settings'
import { SignIn } from './components/pages/SignIn'
import { SignUp } from './components/pages/SignUp'
import { SupportedApps } from './components/pages/SupportedApps'
import { UnlinkPersona } from './components/pages/UnlinkPersona'
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
        path={routes.personas}
        render={() => (
          <WithRedirect shouldBeSignedIn={true}>
            <Personas />
          </WithRedirect>
        )}
      />
      <Route
        strict={true}
        path={routes.personaDetails}
        render={() => (
          <WithRedirect shouldBeSignedIn={true}>
            <PersonaDetails />
          </WithRedirect>
        )}
      />
      <Route
        strict={true}
        exact={true}
        path={routes.createPersona}
        render={() => (
          <WithRedirect shouldBeSignedIn={true}>
            <CreatePersona />
          </WithRedirect>
        )}
      />
      <Route
        strict={true}
        exact={true}
        path={routes.personaCreated}
        render={() => (
          <WithRedirect shouldBeSignedIn={true}>
            <PersonaCreated />
          </WithRedirect>
        )}
      />
      <Route
        strict={true}
        path={routes.editPersona}
        render={() => (
          <WithRedirect shouldBeSignedIn={true}>
            <EditPersona />
          </WithRedirect>
        )}
      />
      <Route
        strict={true}
        path={routes.deletePersona}
        render={() => (
          <WithRedirect shouldBeSignedIn={true}>
            <DeletePersona />
          </WithRedirect>
        )}
      />
      <Route
        strict={true}
        path={routes.unlinkPersona}
        render={() => (
          <WithRedirect shouldBeSignedIn={true}>
            <UnlinkPersona />
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
      <Route
        strict={true}
        exact={true}
        path={routes.qrCode}
        render={() => (
          <WithRedirect shouldBeSignedIn={true}>
            <QRCode />
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
      <ExportPersonaModal />
    </>
  )
}

export default enchance(withRouter(App))
