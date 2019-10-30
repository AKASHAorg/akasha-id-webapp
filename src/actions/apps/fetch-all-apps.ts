import { Action } from 'redux'

import { FETCH_ALL_APPS } from '../../consts/actions/apps'

export interface FetchAllAppsAction extends Action<string> {}

const fetchAllApps = (): FetchAllAppsAction => ({
  type: FETCH_ALL_APPS,
})

export default fetchAllApps
