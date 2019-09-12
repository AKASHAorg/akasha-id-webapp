import { Notification } from '@akashaproject/design-system/dist/components/Notification'
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Route, RouteComponentProps, withRouter } from 'react-router-dom'
import { Action, Dispatch } from 'redux'

import fetchPublicProfilesActionCreator from './actions/landing/fetch-public-profiles'
import { AddAppModal } from './components/modals/AddAppModal'
import { ExportProfileModal } from './components/modals/ExportProfileModal'
import { RemoveAppModal } from './components/modals/RemoveAppModal'
import { Apps } from './components/pages/Apps'
import { Landing } from './components/pages/Landing'
import { Profile } from './components/pages/Profile'
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
    signedIn: state.profile.signedIn,
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
      <AddAppModal />
      <RemoveAppModal />
      <ExportProfileModal />
    </>
  )
}

export default enchance(withRouter(App))
