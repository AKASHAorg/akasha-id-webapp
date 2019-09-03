import { Action, ActionCreator } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { REMOVE_APP } from '../consts/actions'
import { wallet } from '../did'
import { State } from '../states'

export interface RemoveAppAction extends Action<string> {
  token: string
}

const removeAppActionCreator = (token: string): RemoveAppAction => ({
  token,
  type: REMOVE_APP,
})

const removeApp: ActionCreator<ThunkAction<Promise<any>, State, void, Action>> = (
  token: string,
) => async (dispatch, getState) => {
  await wallet.removeApp(token)

  dispatch(removeAppActionCreator(token))
}

export default removeApp
