import { notify } from '@akashaproject/design-system/dist/components/Notification'
import { call, put, takeLatest } from 'redux-saga/effects'

import setRedirect from '../../actions/persona/set-redirect'
import { StartDeletePersonaAction } from '../../actions/persona/start-delete-persona'
import { START_DELETE_PERSONA } from '../../consts/actions/persona'
import { wallet } from '../../did'

function* deletePersonaImplementation(action: StartDeletePersonaAction) {
  try {
    yield call([wallet, wallet.removePersona], action.id)

    yield put(setRedirect(true))

    notify('Persona has been deleted')
  } catch (e) {
    notify(`An error occurred: ${e}`)
    console.error(e)
  }
}

function* deletePersonaSaga() {
  yield takeLatest(START_DELETE_PERSONA, deletePersonaImplementation)
}

export default deletePersonaSaga
