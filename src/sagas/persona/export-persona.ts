import { notify } from '@akashaproject/design-system/dist/components/Notification'
import { call, put, takeLatest } from 'redux-saga/effects'

import setExportPersonaText from '../../actions/persona/set-export-persona-text'
import { SHOW_EXPORT_PERSONA_MODAL } from '../../consts/actions/persona'
import { wallet } from '../../did'

function* exportPersonaImplementation() {
  try {
    const exportPersonaText = JSON.stringify(yield call([wallet, wallet.exportAccount]))

    yield put(setExportPersonaText(exportPersonaText))
  } catch (e) {
    notify(`An error occurred: ${e}`)
    console.error(e)
  }
}

function* exportPersonaSaga() {
  yield takeLatest(SHOW_EXPORT_PERSONA_MODAL, exportPersonaImplementation)
}

export default exportPersonaSaga
