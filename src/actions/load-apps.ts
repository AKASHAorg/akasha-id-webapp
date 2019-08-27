import { Action, ActionCreator } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { LOAD_APPS } from '../consts/actions'
import { wallet } from '../did'
import { State } from '../states'
import { App } from '../states/apps'

export interface LoadAppsAction extends Action<string> {
  apps: { [key: string]: Omit<App, 'id'> }
}

const loadAppsActionCreator = (apps: { [key: string]: Omit<App, 'id'> }): LoadAppsAction => ({
  apps,
  type: LOAD_APPS,
})

const loadApps: ActionCreator<ThunkAction<Promise<any>, State, void, Action>> = () => async (
  dispatch,
  getState,
) => {
  const apps: any = {}
  for (let i = 0; i < 15; i = i + 1) {
    apps[i] = {
      name: 'AKASHA.world',
      description: 'The super cool AKASHA World app!',
      icon: 'https://app.akasha.world/icon.png',
      url: 'https://app.akasha.world',
    }
  }
  dispatch(loadAppsActionCreator(apps))
}

export default loadApps
