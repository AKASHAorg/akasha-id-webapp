import { notify } from '@akashaproject/design-system/dist/components/Notification'
import { call, put, takeLatest } from 'redux-saga/effects'

import setRedirect from '../../actions/persona/set-redirect'
import { StartCreatePersonaAction } from '../../actions/persona/start-create-persona'
import { START_CREATE_PERSONA } from '../../consts/actions/persona'
import { wallet } from '../../did'
import { PersonaData } from '../../types/users'

function* createPersonaImplementation(action: StartCreatePersonaAction) {
  try {
    const data: PersonaData = { ...action.personaData }
    yield call([wallet, wallet.addPersona], data)

    yield put(setRedirect(true))

    notify('Persona has been created')
  } catch (e) {
    notify(`An error occurred: ${e}`)
    console.error(e)
  }
}

function* createPersonaSaga() {
  yield takeLatest(START_CREATE_PERSONA, createPersonaImplementation)
}

export default createPersonaSaga
