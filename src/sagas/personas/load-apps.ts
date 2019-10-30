import { notify } from '@akashaproject/design-system/dist/components/Notification'
import { all, call, put, takeLatest } from 'redux-saga/effects'

import setPersonasApps from '../../actions/personas/set-personas-apps'
import { FETCH_PERSONAS_APPS } from '../../consts/actions/personas'
import { wallet } from '../../did'
import { Apps } from '../../types/apps'
import { Persona } from '../../types/users'

function* fetchApps() {
  try {
    const personas: Persona[] = yield call([wallet, wallet.personas])
    const allApps: Apps[] = yield all(
      personas.map(persona => call([wallet, wallet.apps], persona.id)),
    )

    const personasApps: { [personaId: string]: Apps } = {}
    personas.forEach((persona, index) => (personasApps[persona.id] = allApps[index]))

    yield put(setPersonasApps(personasApps))
  } catch (e) {
    notify(`An error occurred: ${e}`)
    console.error(e)
  }
}

function* loadAppsSaga() {
  yield takeLatest(FETCH_PERSONAS_APPS, fetchApps)
}

export default loadAppsSaga
