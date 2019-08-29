import { Action, ActionCreator } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { HIDE_ADD_APP_MODAL } from '../consts/actions'
import { wallet } from '../did'
import { State } from '../states'

export interface HideAddAppModalAction extends Action<string> {}

const hideAddAppModalActionCreator = (): HideAddAppModalAction => ({
  type: HIDE_ADD_APP_MODAL,
})

const hideAddAppModal: ActionCreator<ThunkAction<Promise<any>, State, void, Action>> = () => async (
  dispatch,
  getState,
) => {
  dispatch(hideAddAppModalActionCreator())

  const state = getState()

  if (
    state.apps.addAppStep === 'request-profile' ||
    state.apps.addAppStep === 'send-claim' ||
    state.apps.addAppStep === 'register-app'
  ) {
    await wallet.sendClaim(state.apps.appRequest, null, false)
  }
}

export default hideAddAppModal
