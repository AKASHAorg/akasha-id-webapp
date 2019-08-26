import { Action, ActionCreator } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { SIGN_UP } from '../consts/actions'
import { client, wallet } from '../did'
import { State } from '../states'

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

  wallet.init()
  const link = state.landing.signUpLink!.substring('http://localhost:3000/#/link/'.length)

  const msg = await wallet.registerApp(link)
  await wallet.sendClaim(
    msg,
    {
      id: wallet.did(),
      login: state.landing.login,
    },
    true,
  )
}

export default signUp
