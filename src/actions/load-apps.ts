import { Action, ActionCreator } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { LOAD_APPS } from '../consts/actions'
import { wallet } from '../did'
import { State } from '../states'
import { App } from '../types/apps'

export interface LoadAppsAction extends Action<string> {
  apps: { [token: string]: App }
}

const loadAppsActionCreator = (apps: { [token: string]: App }): LoadAppsAction => ({
  apps,
  type: LOAD_APPS,
})

const loadApps: ActionCreator<ThunkAction<Promise<any>, State, void, Action>> = () => async (
  dispatch,
  getState,
) => {
  const apps: { [token: string]: App } = await wallet.apps()
  for (const token in apps) {
    if (apps.hasOwnProperty(token)) {
      apps[token].claim = (await wallet.getClaim(token)).attributes
    }
  }

  dispatch(loadAppsActionCreator(apps))
}

export default loadApps
