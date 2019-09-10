import { notify } from '@akashaproject/design-system/dist/components/Notification'
import { Action, ActionCreator } from 'redux'
import { ThunkAction } from 'redux-thunk'

import { REMOVE_APP } from '../consts/actions'
import { wallet } from '../did'
import { State } from '../states'

export interface RemoveAppAction extends Action<string> {}

export const removeAppActionCreator = (token: string): RemoveAppAction => ({
  type: REMOVE_APP,
})

const removeApp: ActionCreator<ThunkAction<Promise<any>, State, void, Action>> = () => async (
  dispatch,
  getState,
) => {
  try {
    const state = getState()
    const token = state.apps.selectedAppToken
    if (!token) {
      throw new Error('App token is missing')
    }

    await wallet.removeApp(token)

    dispatch(removeAppActionCreator(token))

    notify('App has been removed')
  } catch (e) {
    notify(`An error occurred: ${e}`)
  }
}

export default removeApp
