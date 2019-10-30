import { notify } from '@akashaproject/design-system/dist/components/Notification'
import { call, put, takeLatest } from 'redux-saga/effects'

import { FetchPersonaAction } from '../../actions/persona/fetch-persona'
import setPersona from '../../actions/persona/set-persona'
import { FETCH_PERSONA } from '../../consts/actions/persona'
import { wallet } from '../../did'
import { Persona } from '../../types/users'

function* fetchPersona(action: FetchPersonaAction) {
  try {
    const persona: Persona | undefined = yield call([wallet, wallet.persona], action.id)

    yield put(setPersona(persona))
  } catch (e) {
    notify(`An error occurred: ${e}`)
    console.error(e)
  }
}

function* loadPersonaSaga() {
  yield takeLatest(FETCH_PERSONA, fetchPersona)
}

export default loadPersonaSaga
