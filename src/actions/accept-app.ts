import { Action, ActionCreator } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { ACCEPT_APP } from '../consts/actions'
import { wallet } from '../did'
import { State } from '../states'
import setAddAppModalStep from './set-add-app-modal-step'

export interface AcceptAppAction extends Action<string> {}

const acceptAppActionCreator = (): AcceptAppAction => ({
  type: ACCEPT_APP,
})

const acceptApp: ActionCreator<ThunkAction<Promise<any>, State, void, Action>> = (
  shareUsername: boolean,
) => async (dispatch, getState) => {
  const state = getState()
  const appRequest = state.apps.appRequest!

  if (state.apps.addAppStep !== 'register-app') {
    return
  }
  dispatch(setAddAppModalStep('accept-app'))

  const attributes: any = {}
  if (shareUsername) {
    attributes.username = state.profile.username
  }

  dispatch(acceptAppActionCreator())
  await wallet.sendClaim(appRequest, attributes, true)
}

export default acceptApp
