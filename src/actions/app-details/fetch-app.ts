import { Action } from 'redux'

import { FETCH_APP } from '../../consts/actions/app-details'

export interface FetchAppAction extends Action<string> {
  id: string
}

const fetchApp = (id: string): FetchAppAction => ({
  id,
  type: FETCH_APP,
})

export default fetchApp
