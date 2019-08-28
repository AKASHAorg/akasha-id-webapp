import { Action, ActionCreator } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { LOAD_APPS } from '../consts/actions'
import { wallet } from '../did'
import { State } from '../states'
import { App } from '../states/apps'

export interface LoadAppsAction extends Action<string> {
  apps: App[]
}

const loadAppsActionCreator = (apps: App[]): LoadAppsAction => ({
  apps,
  type: LOAD_APPS,
})

const loadApps: ActionCreator<ThunkAction<Promise<any>, State, void, Action>> = () => async (
  dispatch,
  getState,
) => {
  const appsItem = localStorage.getItem('apps')
  let apps = []
  if (appsItem) {
    apps = JSON.parse(appsItem)
  }

  dispatch(loadAppsActionCreator(apps))
}

export default loadApps
