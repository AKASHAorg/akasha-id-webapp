import { Action } from 'redux'

import { DECLINE_APP } from '../../consts/actions/apps'

export interface DeclineAppAction extends Action<string> {}

const declineApp = (): DeclineAppAction => ({
  type: DECLINE_APP,
})

export default declineApp
