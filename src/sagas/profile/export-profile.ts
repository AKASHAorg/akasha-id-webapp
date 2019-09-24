import { notify } from '@akashaproject/design-system/dist/components/Notification'
import { call, put, takeLatest } from 'redux-saga/effects'

import setExportProfileText from '../../actions/profile/set-export-profile-text'
import { SHOW_EXPORT_PROFILE_MODAL } from '../../consts/actions/profile'
import { wallet } from '../../did'

function* exportProfileImplementation() {
  try {
    const exportProfileText = JSON.stringify(yield call([wallet, wallet.exportProfile]))

    yield put(setExportProfileText(exportProfileText))
  } catch (e) {
    notify(`An error occurred: ${e}`)
    console.error(e)
  }
}

function* exportProfileSaga() {
  yield takeLatest(SHOW_EXPORT_PROFILE_MODAL, exportProfileImplementation)
}

export default exportProfileSaga
