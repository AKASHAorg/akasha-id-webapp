import { notify } from '@akashaproject/design-system/dist/components/Notification'
import { all, call, put, takeLatest } from 'redux-saga/effects'

import setAllApps from '../../actions/apps/set-all-apps'
import { FETCH_ALL_APPS } from '../../consts/actions/apps'
import { wallet } from '../../did'
import { Apps } from '../../types/apps'
import { Persona } from '../../types/users'

function* fetchApps() {
  try {
    const personas: Persona[] = yield call([wallet, wallet.personas])

    const appsList: Apps = []
    const allApps: Apps[] = yield all(
      personas.map(persona => call([wallet, wallet.apps], persona.id)),
    )
    allApps.forEach(appsPerPersona => appsList.push(...appsPerPersona))

    yield put(setAllApps(appsList))
  } catch (e) {
    notify(`An error occurred: ${e}`)
    console.error(e)
  }
}

function* loadAppsSaga() {
  yield takeLatest(FETCH_ALL_APPS, fetchApps)
}

export default loadAppsSaga
