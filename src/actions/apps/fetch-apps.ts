import { Action } from 'redux'

import { FETCH_APPS } from '../../consts/actions/apps'

export interface FetchAppsAction extends Action<string> {}

const fetchApps = (): FetchAppsAction => ({
  type: FETCH_APPS,
})

export default fetchApps
