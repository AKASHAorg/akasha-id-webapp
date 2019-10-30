import { Action } from 'redux'

import { START_SEARCHING } from '../../consts/actions/search'

export interface StartSearchingAction extends Action<string> {}

const startSearching = (): StartSearchingAction => ({
  type: START_SEARCHING,
})

export default startSearching
