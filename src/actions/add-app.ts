import { Action, ActionCreator } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { ADD_APP } from '../consts/actions'
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

const addApp: ActionCreator<ThunkAction<Promise<any>, State, void, Action>> = (
  token: string,
  name: string,
  description: string,
  icon: string,
  url: string,
) => async (dispatch, getState) => {
  dispatch(addAppActionCreator(token, name, description, icon, url))

  localStorage.setItem('apps', JSON.stringify(getState().apps.apps))
}

export default addApp
