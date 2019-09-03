import { Action, ActionCreator } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { REGISTER_APP } from '../consts/actions'
import { wallet } from '../did'
import { State } from '../states'
import { AppRequest } from '../types/apps'
import setAddAppModalStep from './set-add-app-modal-step'

export interface RegisterAppAction extends Action<string> {
  appRequest: AppRequest
}

const registerAppActionCreator = (appRequest: AppRequest): RegisterAppAction => ({
  appRequest,
  type: REGISTER_APP,
})

const registerApp: ActionCreator<ThunkAction<Promise<any>, State, void, Action>> = () => async (
  dispatch,
  getState,
) => {
  const link = getState().apps.signUpLink
  const appRequest = await wallet.registerApp(link)

  dispatch(setAddAppModalStep('register-app'))
  dispatch(registerAppActionCreator(appRequest))
}

export default registerApp
