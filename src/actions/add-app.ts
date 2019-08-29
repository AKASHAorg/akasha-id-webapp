import { Action, ActionCreator } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { ADD_APP } from '../consts/actions'
import { wallet } from '../did'
import { State } from '../states'

export interface AddAppAction extends Action<string> {
  token: string
  name: string
  description: string
  icon: string
  url: string
}

const addAppActionCreator = (
  token: string,
  name: string,
  description: string,
  icon: string,
  url: string,
): AddAppAction => ({
  token,
  name,
  description,
  icon,
  url,
  type: ADD_APP,
})

const addApp: ActionCreator<ThunkAction<Promise<any>, State, void, Action>> = () => async (
  dispatch,
  getState,
) => {
  const state = getState()
  const appRequest = state.apps.appRequest!

  const attributes: any = {}
  if (state.apps.shareFirstName) {
    attributes.firstName = state.profile.firstName
  }

  if (state.apps.shareLastName) {
    attributes.lastName = state.profile.lastName
  }

  const claim = await wallet.sendClaim(appRequest, attributes, true)

  dispatch(
    addAppActionCreator(
      appRequest.token,
      appRequest.appInfo.name,
      appRequest.appInfo.description,
      appRequest.appInfo.icon,
      appRequest.appInfo.url,
    ),
  )
}

export default addApp
