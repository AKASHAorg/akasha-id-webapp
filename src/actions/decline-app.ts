import { Action, ActionCreator } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { DECLINE_APP } from '../consts/actions'
import { wallet } from '../did'
import { State } from '../states'
import hideAddAppModal from './hide-add-app-modal'
import setAddAppModalStep from './set-add-app-modal-step'

export interface DeclineAppAction extends Action<string> {}

const declineAppActionCreator = (): DeclineAppAction => ({
  type: DECLINE_APP,
})

const declineApp: ActionCreator<ThunkAction<Promise<any>, State, void, Action>> = () => async (
  dispatch,
  getState,
) => {
  const state = getState()
  const appRequest = state.apps.appRequest!

  if (state.apps.addAppStep === 'decline-app') {
    return
  }

  if (state.apps.addAppStep !== 'register-app' && state.apps.addAppStep !== 'accept-app') {
    dispatch(hideAddAppModal())

    return
  }

  dispatch(setAddAppModalStep('decline-app'))

  dispatch(declineAppActionCreator())
  await wallet.sendClaim(appRequest, null, false)
}

export default declineApp
