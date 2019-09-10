import { Notification } from '@akashaproject/design-system/dist/components/Notification'
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Route, RouteComponentProps, withRouter } from 'react-router-dom'
import { Action } from 'redux'
import { ThunkDispatch } from 'redux-thunk'

import loadUsersActionCreator from './actions/load-users'
import { AddAppModal } from './components/modals/AddAppModal'
import { RemoveAppModal } from './components/modals/RemoveAppModal'
import { Apps } from './components/pages/Apps'
import { Landing } from './components/pages/Landing'
import { Profile } from './components/pages/Profile'
import { SignIn } from './components/pages/SignIn'
import { SignUp } from './components/pages/SignUp'
import * as routes from './consts/routes'
import { State } from './states'

export interface AppProps extends RouteComponentProps {
  signedIn: boolean
  loadUsers: () => void
}

const enchance = connect(
  (state: State): Pick<AppProps, 'signedIn'> => ({
    signedIn: state.profile.signedIn,
  }),
  (dispatch: ThunkDispatch<State, void, Action>) => ({
    loadUsers: () => dispatch(loadUsersActionCreator()),
  }),
)

const App: React.FC<AppProps> = ({ signedIn, loadUsers }: AppProps) => {
  useEffect(() => {
    loadUsers()
  }, [loadUsers])

  return (
    <>
      <Route strict={true} exact={true} path={routes.signUp} component={SignUp} />
      <Route strict={true} path={routes.signIn} component={SignIn} />
      <Route strict={true} exact={true} path={routes.profile} component={Profile} />
      <Route strict={true} exact={true} path={routes.apps} component={Apps} />
      <Route exact={true} path={routes.landing} component={Landing} />
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
    </>
  )
}

export default enchance(withRouter(App))
