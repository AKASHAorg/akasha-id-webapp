import { Action, ActionCreator } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { SIGN_UP } from '../consts/actions'
import { wallet } from '../did'
import { State } from '../states'
import addApp from './add-app'
import loadApps from './load-apps'
import loadProfile from './load-profile'

export interface SignUpAction extends Action<string> {}

const signUpActionCreator = (): SignUpAction => ({
  type: SIGN_UP,
})

const signUp: ActionCreator<ThunkAction<Promise<any>, State, void, Action>> = () => async (
  dispatch,
  getState,
) => {
  dispatch(signUpActionCreator())

  const state = getState()
  const claim = await wallet.sendClaim(
    state.landing.appRequest,
    {
      login: state.landing.login,
    },
    true,
  )
  dispatch(loadApps())

  const appRequest = state.landing.appRequest!
  dispatch(
    addApp(
      appRequest.token,
      appRequest.appInfo.name,
      appRequest.appInfo.description,
      appRequest.appInfo.icon,
      appRequest.appInfo.url,
    ),
  )

  dispatch(loadProfile())
}

export default signUp
