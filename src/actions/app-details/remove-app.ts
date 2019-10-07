import { Action } from 'redux'

import { REMOVE_APP } from '../../consts/actions/app-details'

export interface RemoveAppAction extends Action<string> {}

const removeApp = (): RemoveAppAction => ({
  type: REMOVE_APP,
})

export default removeApp
