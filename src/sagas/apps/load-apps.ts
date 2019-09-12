import { notify } from '@akashaproject/design-system/dist/components/Notification'
import { call, put, takeLatest } from 'redux-saga/effects'

import setApps from '../../actions/apps/set-apps'
import { FETCH_APPS } from '../../consts/actions/apps'
import { wallet } from '../../did'
import { App } from '../../types/apps'

function* fetchApps() {
  try {
    const apps: { [token: string]: App } = yield call([wallet, wallet.apps])
    const profile = yield call([wallet, wallet.profile])

    for (const token in apps) {
      if (apps.hasOwnProperty(token) && profile) {
        const claim = yield call([wallet, wallet.getClaim], token)
        claim.attributes.forEach((attr: string) => {
          claim[attr] = profile[attr]
        })

        apps[token].claim = claim
      }
    }

    yield put(setApps(apps))
  } catch (e) {
    notify(`An error occurred: ${e}`)
    console.error(e)
  }
}

function* loadApps() {
  yield takeLatest(FETCH_APPS, fetchApps)
}

export default loadApps
