import { Action, ActionCreator } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { REGISTER_APP } from '../consts/actions'
import { client, wallet } from '../did'
import { State } from '../states'
import { AppRequest } from '../states/landing'

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
  const link = getState().landing.signUpLink
  const appRequest = await wallet.registerApp(link)

  dispatch(registerAppActionCreator(appRequest))
}

export default registerApp
