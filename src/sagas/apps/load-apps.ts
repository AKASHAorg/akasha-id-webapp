import { notify } from '@akashaproject/design-system/dist/components/Notification'
import { call, put, takeLatest } from 'redux-saga/effects'

import setApps from '../../actions/apps/set-apps'
import { FETCH_APPS } from '../../consts/actions/apps'
import { wallet } from '../../did'
import { Apps } from '../../types/apps'

function* fetchApps() {
  try {
    yield null
    // const apps: Apps = yield call([wallet, wallet.apps])

    // yield put(setApps(apps))
  } catch (e) {
    notify(`An error occurred: ${e}`)
    console.error(e)
  }
}

function* loadAppsSaga() {
  yield takeLatest(FETCH_APPS, fetchApps)
}

export default loadAppsSaga
