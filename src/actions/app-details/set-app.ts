import { Action } from 'redux'

import { SET_APP } from '../../consts/actions/app-details'
import { App } from '../../types/apps'

export interface SetAppAction extends Action<string> {
  app?: App
}

const setApp = (app?: App): SetAppAction => ({
  app,
  type: SET_APP,
})

export default setApp
