import { Action, ActionCreator } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { HIDE_SIGN_UP_MODAL } from '../consts/actions'
import { client, wallet } from '../did'
import { State } from '../states'

export interface HideSignUpModalAction extends Action<string> {}

const hideSignUpModalActionCreator = (): HideSignUpModalAction => ({
  type: HIDE_SIGN_UP_MODAL,
})

const hideSignUpModal: ActionCreator<ThunkAction<Promise<any>, State, void, Action>> = () => async (
  dispatch,
  getState,
) => {
  dispatch(hideSignUpModalActionCreator())

  const state = getState()

  if (state.landing.signUpStep === 'enter-login' || state.landing.signUpStep === 'send-claim') {
    wallet.init()
    const link = state.landing.signUpLink!.substring('http://localhost:3000/#/link/'.length)
    const msg = await wallet.registerApp(link)
    await wallet.sendClaim(msg, null, false)
  }
}

export default hideSignUpModal
