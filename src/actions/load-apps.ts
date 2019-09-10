import { notify } from '@akashaproject/design-system/dist/components/Notification'
import { Action, ActionCreator } from 'redux'
import { ThunkAction } from 'redux-thunk'

import { LOAD_APPS } from '../consts/actions'
import { wallet } from '../did'
import { State } from '../states'
import { App } from '../types/apps'

export interface LoadAppsAction extends Action<string> {
  apps: { [token: string]: App }
}

export const loadAppsActionCreator = (apps: { [token: string]: App }): LoadAppsAction => ({
  apps,
  type: LOAD_APPS,
})

const loadApps: ActionCreator<ThunkAction<Promise<any>, State, void, Action>> = () => async (
  dispatch,
  getState,
) => {
  try {
    const apps: { [token: string]: App } = await wallet.apps()
    const profile = await wallet.profile()

    for (const token in apps) {
      if (apps.hasOwnProperty(token) && profile) {
        const claim = await wallet.getClaim(token)
        claim.attributes.forEach((attr: string) => {
          claim[attr] = profile[attr]
        })

        apps[token].claim = claim
      }
    }

    dispatch(loadAppsActionCreator(apps))
  } catch (e) {
    notify(`An error occurred: ${e}`)
  }
}

export default loadApps
