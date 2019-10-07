import { Action } from 'redux'

import { START_REMOVE_APP } from '../../consts/actions/app-details'

export interface StartRemoveAppAction extends Action<string> {}

const startRemoveApp = (): StartRemoveAppAction => ({
  type: START_REMOVE_APP,
})

export default startRemoveApp
