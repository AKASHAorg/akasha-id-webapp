import { notify } from '@akashaproject/design-system/dist/components/Notification'
import { call, put, takeLatest } from 'redux-saga/effects'

import setRedirect from '../../actions/persona/set-redirect'
import { StartUpdatePersonaAction } from '../../actions/persona/start-update-persona'
import { START_UPDATE_PERSONA } from '../../consts/actions/persona'
import { wallet } from '../../did'
import { PersonaData } from '../../types/users'

function* updatePersonaImplementation(action: StartUpdatePersonaAction) {
  try {
    const data: PersonaData = { ...action.personaData }
    yield call([wallet, wallet.updatePersona], data)

    yield put(setRedirect(true))

    notify('Persona has been updated')
  } catch (e) {
    notify(`An error occurred: ${e}`)
    console.error(e)
  }
}

function* updatePersonaSaga() {
  yield takeLatest(START_UPDATE_PERSONA, updatePersonaImplementation)
}

export default updatePersonaSaga
