import { notify } from '@akashaproject/design-system/dist/components/Notification'
import { call, put, takeLatest } from 'redux-saga/effects'

import setPersonas from '../../actions/personas/set-personas'
import { FETCH_PERSONAS } from '../../consts/actions/personas'
import { wallet } from '../../did'
import { Persona } from '../../types/users'

function* fetchPersonas() {
  try {
    const personas: Persona[] = yield call([wallet, wallet.personas])
    yield put(setPersonas(personas))
  } catch (e) {
    notify(`An error occurred: ${e}`)
    console.error(e)
  }
}

function* loadPersonasSaga() {
  yield takeLatest(FETCH_PERSONAS, fetchPersonas)
}

export default loadPersonasSaga
