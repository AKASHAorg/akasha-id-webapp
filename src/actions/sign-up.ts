import { Action, ActionCreator } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { SIGN_UP } from '../consts/actions'
import { wallet } from '../did'
import { State } from '../states'
import loadApps from './load-apps'

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

  wallet.init(() => {})
  const link = state.landing.signUpLink!.substring('http://localhost:3000/#/link/'.length)

  const msg = await wallet.registerApp(link)
  await wallet.sendClaim(
    msg,
    {
      login: state.landing.login,
    },
    true,
  )
  dispatch(loadApps())
}

export default signUp
