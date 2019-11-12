import { notify } from '@akashaproject/design-system/dist/components/Notification'
import { call, put, takeLatest } from 'redux-saga/effects'

import { FetchPersonaAppsAction } from '../../actions/persona/fetch-persona-apps'
import setPersonaApps from '../../actions/persona/set-persona-apps'
import { FETCH_PERSONA_APPS } from '../../consts/actions/persona'
import { wallet } from '../../did'
import { Apps } from '../../types/apps'

function* fetchApps(action: FetchPersonaAppsAction) {
  try {
    const apps: Apps = yield call([wallet, wallet.apps], action.personaId)

    yield put(setPersonaApps(apps))
  } catch (e) {
    notify(`An error occurred: ${e}`)
    console.error(e)
  }
}

function* loadAppsSaga() {
  yield takeLatest(FETCH_PERSONA_APPS, fetchApps)
}

export default loadAppsSaga
