import { Action, ActionCreator } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { REMOVE_APP } from '../consts/actions'
import { wallet } from '../did'
import { State } from '../states'

export interface RemoveAppAction extends Action<string> {
  id: string
}

const removeAppActionCreator = (id: string): RemoveAppAction => ({
  id,
  type: REMOVE_APP,
})

const loadApps: ActionCreator<ThunkAction<Promise<any>, State, void, Action>> = (
  id: string,
) => async (dispatch, getState) => {
  dispatch(removeAppActionCreator(id))
}

export default loadApps
